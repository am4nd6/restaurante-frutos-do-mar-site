import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";

interface Field {
  l: string;
  t: string;
  ph?: string;
  validate?: (v: string) => string | null;
}

const fields: Field[] = [
  {
    l: "Nome",
    t: "text",
    ph: "Como devemos chamá-lo",
    validate: (v) => (!v.trim() ? "Informe seu nome" : null),
  },
  {
    l: "E-mail",
    t: "email",
    ph: "voce@email.com",
    validate: (v) => {
      if (!v.trim()) return "Informe seu e-mail";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "E-mail inválido — use o formato voce@email.com";
      return null;
    },
  },
  {
    l: "Telefone",
    t: "tel",
    ph: "+55 (99) 99999-9999",
    validate: (v) => {
      const digits = v.replace(/\D/g, "");
      if (!digits) return "Informe seu telefone";
      if (digits.length < 12) return "Telefone incompleto — informe DDD + número";
      return null;
    },
  },
  {
    l: "Pessoas",
    t: "number",
    ph: "2",
    validate: (v) => {
      if (!v.trim()) return "Informe o número de pessoas";
      const n = Number(v);
      if (isNaN(n) || n < 1) return "Mínimo de 1 pessoa";
      return null;
    },
  },
  { l: "Data", t: "date", validate: (v) => (!v ? "Selecione uma data" : null) },
  {
    l: "Horário",
    t: "time",
    validate: (v) => {
      if (!v) return "Selecione um horário";
      if (!/^\d{2}:\d{2}$/.test(v)) return "Formato inválido — use HH:MM";
      const [h, m] = v.split(":").map(Number);
      if (h > 23 || m > 59) return "Horário inválido";
      const min = h * 60 + m;
      if (min >= 12 * 60 && min <= 15 * 60 + 30) return null;
      if (min >= 19 * 60 && min <= 23 * 60) return null;
      return "Fora do horário — Almoço 12h–15h30 · Jantar 19h–23h";
    },
  },
];

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const fmtDate = (v: string) => {
  if (!v) return "";
  const [y, m, d] = v.split("-");
  return `${d}/${m}/${y}`;
};

const fmtPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "");
  if (d.length === 0) return "+55 ";
  if (d.length <= 2) return `+${d}`;
  if (d.length <= 4) return `+${d.slice(0, 2)} (${d.slice(2)}`;
  if (d.length <= 9) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4)}`;
  return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9, 13)}`;
};

const HOURS = ["12", "13", "14", "15", "19", "20", "21", "22", "23"];
const MINS = ["00", "30"];

function useClickOutside(refs: React.RefObject<HTMLElement | null>[], cb: () => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (refs.every((r) => r.current && !r.current.contains(e.target as Node))) cb();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [refs, cb]);
}

export function Reserve() {
  const [values, setValues] = useState<Record<string, string>>({ Pessoas: "1", Telefone: "+55 " });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calMonth, setCalMonth] = useState(() => new Date().getMonth());
  const [calYear, setCalYear] = useState(() => new Date().getFullYear());
  const [timeOpen, setTimeOpen] = useState(false);
  const [tempHour, setTempHour] = useState("12");
  const [tempMin, setTempMin] = useState("00");

  const calRef = useRef<HTMLDivElement>(null);
  const calTriggerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const timeTriggerRef = useRef<HTMLDivElement>(null);

  useClickOutside([calRef, calTriggerRef], () => setCalendarOpen(false));
  useClickOutside([timeRef, timeTriggerRef], () => {
    if (timeOpen) setTimeOpen(false);
  });

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const allValid = useMemo(
    () =>
      fields.every((f) => {
        const v = values[f.l] ?? "";
        return v.trim() !== "" && f.validate?.(v) === null;
      }),
    [values],
  );

  const runValidate = (label: string, value: string) => {
    const field = fields.find((f) => f.l === label);
    return field?.validate?.(value) ?? null;
  };

  const validateAll = () => {
    const ns: Record<string, string> = {};
    for (const f of fields) {
      const err = runValidate(f.l, values[f.l] ?? "");
      if (err) ns[f.l] = err;
    }
    setErrors(ns);
    return Object.keys(ns).length === 0;
  };

  const change = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
    if (label === "E-mail") {
      setTouched((prev) => ({ ...prev, "E-mail": true }));
    }
    if (touched[label]) {
      const err = runValidate(label, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (err) next[label] = err;
        else delete next[label];
        return next;
      });
    }
  };

  const handleFocus = (label: string) => setFocusedField(label);

  const handleBlur = (label: string) => {
    setFocusedField((prev) => (prev === label ? null : prev));
    setTouched((prev) => ({ ...prev, [label]: true }));
    const err = runValidate(label, values[label] ?? "");
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[label] = err;
      else delete next[label];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allT: Record<string, boolean> = {};
    for (const f of fields) allT[f.l] = true;
    setTouched((prev) => ({ ...prev, ...allT }));
    if (validateAll()) setSent(true);
  };

  const adjustPeople = (delta: number) => {
    const cur = Number(values["Pessoas"] ?? 1);
    const next = Math.max(1, Math.min(20, cur + delta));
    change("Pessoas", String(next));
    setTouched((prev) => ({ ...prev, Pessoas: true }));
    setFocusedField("Pessoas");
  };

  // ── Calendar ──
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const calDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calDays.push(i);
  while (calDays.length < 42) calDays.push(null);

  const selectDate = (d: number) => {
    change(
      "Data",
      `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    );
    setTouched((prev) => ({ ...prev, Data: true }));
    setCalendarOpen(false);
  };

  const isToday = (d: number) => {
    const t = new Date();
    return d === t.getDate() && calMonth === t.getMonth() && calYear === t.getFullYear();
  };

  const isSelected = (d: number) => {
    if (!values["Data"]) return false;
    const [y, m, day] = values["Data"].split("-");
    return Number(day) === d && Number(m) === calMonth + 1 && Number(y) === calYear;
  };

  const navMonth = (delta: number) => {
    let m = calMonth + delta;
    let y = calYear;
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    setCalMonth(m);
    setCalYear(y);
  };

  const openCalendar = () => {
    if (values["Data"]) {
      const [y, m] = values["Data"].split("-");
      setCalYear(Number(y));
      setCalMonth(Number(m) - 1);
    } else {
      const t = new Date();
      setCalMonth(t.getMonth());
      setCalYear(t.getFullYear());
    }
    setCalendarOpen(true);
    handleFocus("Data");
  };

  const closeCalendar = () => setCalendarOpen(false);

  const toggleCalendar = () => {
    if (calendarOpen) {
      setCalendarOpen(false);
    } else {
      if (values["Data"]) {
        const [y, m] = values["Data"].split("-");
        setCalYear(Number(y));
        setCalMonth(Number(m) - 1);
      } else {
        const t = new Date();
        setCalMonth(t.getMonth());
        setCalYear(t.getFullYear());
      }
      setCalendarOpen(true);
      handleFocus("Data");
    }
  };

  const goToToday = () => {
    const t = new Date();
    setCalMonth(t.getMonth());
    setCalYear(t.getFullYear());
  };

  // ── Time stepper ──
  const openTimePicker = () => {
    if (values["Horário"]) {
      const [h, m] = values["Horário"].split(":");
      setTempHour(h);
      setTempMin(m);
    } else {
      setTempHour("12");
      setTempMin("00");
    }
    setCalendarOpen(false);
    setTimeOpen(true);
    handleFocus("Horário");
  };

  const adjustHour = (delta: number) => {
    const idx = HOURS.indexOf(tempHour);
    const next = (idx + delta + HOURS.length) % HOURS.length;
    setTempHour(HOURS[next]);
  };
  const adjustMin = (delta: number) => {
    const idx = MINS.indexOf(tempMin);
    const next = (idx + delta + MINS.length) % MINS.length;
    setTempMin(MINS[next]);
  };

  const confirmTime = () => {
    change("Horário", tempHour + ":" + tempMin);
    setTouched((prev) => ({ ...prev, Horário: true }));
    setTimeOpen(false);
  };

  const renderField = (f: Field) => {
    const hasErr = !!errors[f.l];
    const isFocused = focusedField === f.l;
    const val = values[f.l] ?? "";

    const labelEl = (
      <span
        className={`block text-[11px] uppercase tracking-[0.3em] mb-2 transition-colors duration-300 ${
          hasErr ? "text-red-400" : isFocused ? "text-gold" : "text-(--gold)/70"
        }`}
      >
        {f.l}
        <span className={`ml-1 ${hasErr ? "text-red-400" : "text-(--gold)/40"}`}>*</span>
      </span>
    );

    const errEl = hasErr ? (
      <motion.p
        key={f.l + "-err"}
        initial={{ opacity: 0, y: -6, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -6, height: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-1.5 text-[11px] text-red-400/90 leading-tight"
      >
        {errors[f.l]}
      </motion.p>
    ) : null;

    const underline = (
      <span
        className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-500 ease-out rounded-full ${
          hasErr ? "bg-red-400" : "bg-gold"
        } ${isFocused ? "w-full" : "w-0"}`}
      />
    );

    // ── Date picker ──
    if (f.l === "Data") {
      return (
        <div key={f.l} className="block relative">
          {labelEl}
          <div className="relative" ref={calTriggerRef}>
            <div
              role="button"
              tabIndex={0}
              onClick={toggleCalendar}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleCalendar();
              }}
              className={`flex items-center justify-between py-3 border-b transition-colors duration-300 cursor-pointer ${
                hasErr
                  ? "border-red-400/70"
                  : isFocused || calendarOpen
                    ? "border-transparent"
                    : "border-(--ice)/15"
              }`}
            >
              <span className={`text-ice transition-opacity ${val ? "opacity-100" : "opacity-30"}`}>
                {val ? fmtDate(val) : "Selecione a data"}
              </span>
              <svg
                className="w-4 h-4 text-(--gold)/60 shrink-0 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            {underline}

            <AnimatePresence>
              {calendarOpen && (
                <motion.div
                  ref={calRef}
                  key="cal"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 z-50 w-[min(17.5rem,calc(100vw-2rem))] origin-top-left"
                >
                  <div className="glass rounded-2xl p-4 border border-(--gold)/20 shadow-2xl bg-(--abyss)/95 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navMonth(-1);
                        }}
                        className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-(--gold)/60 hover:text-gold hover:bg-(--gold)/10 transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="font-display text-sm text-ice">
                        {MONTHS[calMonth]} <span className="text-(--gold)/60">{calYear}</span>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navMonth(1);
                        }}
                        className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-(--gold)/60 hover:text-gold hover:bg-(--gold)/10 transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {WEEKDAYS.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] uppercase tracking-wider text-(--gold)/50 text-center"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calDays.map((d, i) => (
                        <button
                          key={i}
                          type="button"
                          disabled={!d}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (d) selectDate(d);
                          }}
                          className={`relative flex items-center justify-center w-full aspect-square rounded-xl text-sm transition-all duration-200 ${
                            !d
                              ? "invisible"
                              : isSelected(d!) && isToday(d!)
                                ? "bg-gold text-abyss font-semibold ring-2 ring-inset ring-white/30"
                                : isSelected(d!)
                                  ? "bg-gold text-abyss font-semibold"
                                  : isToday(d!)
                                    ? "text-gold font-medium ring-1 ring-inset ring-(--gold)/50 hover:bg-(--gold)/15"
                                    : "text-ice/80 hover:bg-gold/10 hover:text-gold"
                          }`}
                        >
                          {d}
                        </button>
                      ))}

                      {/* filler cells to keep 42 total */}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToToday();
                      }}
                      className="mt-3 w-full rounded-xl border border-(--gold)/20 py-2 text-[11px] uppercase tracking-[0.25em] text-(--gold)/70 transition-all hover:bg-(--gold)/10 hover:text-gold hover:border-gold/40"
                    >
                      Hoje
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">{errEl}</AnimatePresence>
        </div>
      );
    }

    // ── Time picker ──
    if (f.l === "Horário") {
      return (
        <div key={f.l} className="block relative">
          {labelEl}
          <div className="relative" ref={timeTriggerRef}>
            <div
              role="button"
              tabIndex={0}
              onClick={openTimePicker}
              onKeyDown={(e) => {
                if (e.key === "Enter") openTimePicker();
              }}
              onBlur={() => handleBlur("Horário")}
              className={`flex items-center justify-between py-3 border-b transition-colors duration-300 cursor-pointer ${
                hasErr
                  ? "border-red-400/70"
                  : isFocused || timeOpen
                    ? "border-transparent"
                    : "border-(--ice)/15"
              }`}
            >
              <span className={`text-ice transition-opacity ${val ? "opacity-100" : "opacity-30"}`}>
                {val || "HH:MM"}
              </span>
              <svg
                className="w-4 h-4 text-(--gold)/60 shrink-0 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {underline}

            <AnimatePresence>
              {timeOpen && (
                <motion.div
                  ref={timeRef}
                  key="time"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 z-50 w-[min(15rem,calc(100vw-2rem))] origin-top-left"
                >
                  <div className="glass rounded-2xl p-5 border border-(--gold)/20 shadow-2xl bg-(--abyss)/95 backdrop-blur-xl">
                    {/* Display */}
                    <div className="flex items-center justify-center gap-2 mb-5">
                      <span className="font-display text-4xl tracking-wider text-ice">
                        {tempHour}
                      </span>
                      <span className="font-display text-4xl text-gold animate-pulse">:</span>
                      <span className="font-display text-4xl tracking-wider text-ice">
                        {tempMin}
                      </span>
                    </div>

                    {/* Steppers */}
                    <div className="flex items-center justify-center gap-8 mb-5">
                      {/* Hours */}
                      <div className="flex flex-col items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            adjustHour(1);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
                          </svg>
                        </button>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-(--gold)/50">
                          Hora
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            adjustHour(-1);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Minutes */}
                      <div className="flex flex-col items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            adjustMin(1);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
                          </svg>
                        </button>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-(--gold)/50">
                          Min
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            adjustMin(-1);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        confirmTime();
                      }}
                      className="w-full rounded-xl bg-gold text-abyss font-semibold py-3 text-xs uppercase tracking-[0.3em] shadow-lg shadow-(--gold)/20 hover:shadow-xl hover:shadow-(--gold)/30 transition-all active:scale-95"
                    >
                      Confirmar Horário
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">{errEl}</AnimatePresence>
        </div>
      );
    }

    // ── People ──
    if (f.l === "Pessoas") {
      return (
        <label key={f.l} className="block relative">
          {labelEl}
          <div
            className="relative flex items-center border-b transition-colors duration-300 py-1.5 gap-3"
            style={{
              borderColor: hasErr
                ? "rgba(248,113,113,0.7)"
                : isFocused
                  ? "transparent"
                  : "rgba(245,240,235,0.15)",
            }}
          >
            <button
              type="button"
              onClick={() => adjustPeople(-1)}
              disabled={Number(val || 1) <= 1}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                Number(val || 1) <= 1
                  ? "border-(--ice)/10 text-(--ice)/20 cursor-not-allowed"
                  : "border-(--gold)/30 text-(--gold)/70 hover:border-gold hover:text-gold hover:bg-(--gold)/10 cursor-pointer active:scale-90"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>

            <input
              type="text"
              inputMode="numeric"
              value={val}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                const n = Number(v);
                if (v === "" || (n >= 1 && n <= 20) || v === "0") change("Pessoas", v);
              }}
              onFocus={() => handleFocus("Pessoas")}
              onBlur={() => handleBlur("Pessoas")}
              className="w-12 bg-transparent text-center text-lg text-ice outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              type="button"
              onClick={() => adjustPeople(1)}
              disabled={Number(val || 1) >= 20}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                Number(val || 1) >= 20
                  ? "border-(--ice)/10 text-(--ice)/20 cursor-not-allowed"
                  : "border-(--gold)/30 text-(--gold)/70 hover:border-gold hover:text-gold hover:bg-(--gold)/10 cursor-pointer active:scale-90"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
              </svg>
            </button>

            {underline}
          </div>
          <AnimatePresence mode="wait">{errEl}</AnimatePresence>
        </label>
      );
    }

    // ── Default ──
    if (f.l === "Telefone") {
      const handlePhoneChange = (raw: string) => {
        let digits = raw.replace(/\D/g, "");
        if (!digits.startsWith("55")) digits = "55" + digits;
        digits = digits.slice(0, 13);
        const formatted = fmtPhone(digits);
        change("Telefone", formatted);
      };

      return (
        <label key={f.l} className="block relative">
          {labelEl}
          <div className="relative">
            <input
              type="tel"
              placeholder="+55 (99) 99999-9999"
              value={val}
              onChange={(e) => handlePhoneChange(e.target.value)}
              onFocus={() => handleFocus(f.l)}
              onBlur={() => handleBlur(f.l)}
              className={`peer w-full bg-transparent border-b py-3 pr-3 outline-none transition-all duration-300 text-ice placeholder:text-(--ice)/25 ${
                hasErr
                  ? "border-red-400/70 focus:border-red-400"
                  : "border-(--ice)/15 focus:border-transparent"
              }`}
            />
            {underline}
          </div>
          <AnimatePresence mode="wait">{errEl}</AnimatePresence>
        </label>
      );
    }

    return (
      <label key={f.l} className="block relative">
        {labelEl}
        <div className="relative">
          <input
            type={f.t}
            placeholder={f.ph}
            value={val}
            onChange={(e) => change(f.l, e.target.value)}
            onFocus={() => handleFocus(f.l)}
            onBlur={() => handleBlur(f.l)}
            className={`peer w-full bg-transparent border-b py-3 pr-3 outline-none transition-all duration-300 text-ice placeholder:text-(--ice)/25 ${
              hasErr
                ? "border-red-400/70 focus:border-red-400"
                : "border-(--ice)/15 focus:border-transparent"
            }`}
          />
          {underline}
        </div>
        <AnimatePresence mode="wait">{errEl}</AnimatePresence>
      </label>
    );
  };

  return (
    <section id="reserva" className="relative py-20 md:py-28">
      <style>{`
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            oklch(0.95 0.15 85 / 0.25) 50%,
            transparent 70%
          );
          transform: translateX(-100%) rotate(25deg);
          pointer-events: none;
        }
        .btn-shine:not(:disabled):hover::after {
          animation: shine 0.8s ease-out forwards;
        }
        @keyframes shine {
          100% { transform: translateX(100%) rotate(25deg); }
        }
        .scrollbar-gold::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-gold::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-gold::-webkit-scrollbar-thumb {
          background: oklch(0.78 0.09 85 / 0.3);
          border-radius: 99px;
        }
        .scrollbar-gold::-webkit-scrollbar-thumb:hover {
          background: oklch(0.78 0.09 85 / 0.5);
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.78 0.09 85 / 0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Reserva de Mesa
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-ice leading-[1.05]">
            Reserve sua mesa <span className="italic text-gold-gradient">na Ilha</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={handleSubmit}
          noValidate
          className="relative glass rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 border border-gold/10"
        >
          {fields.map(renderField)}

          <label className="block md:col-span-2">
            <span className="block text-[11px] uppercase tracking-[0.3em] text-(--gold)/70 mb-2">
              Ocasião especial
              <span className="text-(--gold)/30 ml-1 text-[9px]">(opcional)</span>
            </span>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="Aniversário, alergias, pedido especial..."
                className="w-full bg-transparent border-b border-(--ice)/15 focus:border-gold outline-none py-3 text-ice placeholder:text-(--ice)/25 resize-none transition-all duration-300"
              />
            </div>
          </label>

          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6">
            <p className="text-[11px] text-(--ice)/45 max-w-sm leading-relaxed text-justify">
              Confirmamos por WhatsApp em até 2 horas. Cancelamentos com 24h de antecedência.
              Recomendamos reservar com uma semana — São Luís enche aos fins de semana.
            </p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-8 py-4 text-sm text-emerald-400 font-medium shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Reserva enviada ✓
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  type="submit"
                  disabled={!allValid}
                  whileHover={allValid ? { scale: 1.03 } : {}}
                  whileTap={allValid ? { scale: 0.97 } : {}}
                  className={`btn-shine inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold transition-all duration-500 shrink-0 ${
                    allValid
                      ? "bg-gold text-abyss shadow-lg shadow-(--gold)/25 hover:shadow-xl hover:shadow-(--gold)/35 cursor-pointer"
                      : "bg-(--ice)/8 text-(--ice)/30 cursor-not-allowed border border-(--ice)/10"
                  }`}
                >
                  {allValid ? (
                    <>
                      Confirmar Reserva
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      Preencha os campos
                    </>
                  )}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
