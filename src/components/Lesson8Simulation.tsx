import { useMemo, useState } from 'react';
import { Home, Baby, HeartPulse, CheckCircle, XCircle, RefreshCcw, Info, TrendingUp } from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  details: string;
  prompt: string;
  options: string[];
  correct: number;
  rationale: string;
}

interface Lesson8SimulationProps {
  isPresentation: boolean;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: 'Adopted before 6 months (ERA study)',
    details: 'Adopted from Romanian institution at 5 months.',
    prompt: 'Which outcome best fits ERA findings?',
    options: [
      'Near-normal IQ (~100) and rare disinhibited attachment',
      'Severely low IQ (<70) and persistent disinhibition',
      'No benefit from adoption; IQ stays ~60'
    ],
    correct: 0,
    rationale: 'Rutter et al. found children adopted before 6 months caught up on IQ (~102) and rarely showed disinhibited attachment.'
  },
  {
    id: 2,
    title: 'Adopted between 6-24 months',
    details: 'Adopted at 18 months after institutional care.',
    prompt: 'What pattern is most likely?',
    options: [
      'Moderate IQ (~86) with some disinhibited attachment risk',
      'High IQ (~110) and no attachment issues',
      'IQ drop only if adopted after 4 years'
    ],
    correct: 0,
    rationale: 'ERA data showed a moderate IQ lag and higher rates of disinhibited attachment when adoption occurred after 6 months.'
  },
  {
    id: 3,
    title: 'Adopted after 24 months',
    details: 'Adopted at 32 months; over two years in institution.',
    prompt: 'What outcome is most consistent?',
    options: [
      'Lower IQ (~77) and pronounced disinhibited attachment',
      'IQ identical to controls and no attachment issues',
      'Permanent affectionless psychopathy in all cases'
    ],
    correct: 0,
    rationale: 'Later adoption in ERA was linked to lower IQ and higher disinhibited attachment; not all developed psychopathy.'
  },
  {
    id: 4,
    title: 'Current behaviour: attention-seeking with strangers',
    details: 'Frequently hugs unfamiliar adults; little stranger wariness.',
    prompt: 'How should this behaviour be labelled?',
    options: [
      'Disinhibited attachment common in institutionally raised children',
      'Secure base behaviour',
      'Insecure-avoidant attachment'
    ],
    correct: 0,
    rationale: 'Indiscriminate friendliness and attention-seeking is the hallmark of disinhibited attachment linked to institutional care.'
  },
  {
    id: 5,
    title: 'Adult romantic style (Hazan & Shaver)',
    details: 'Describes fear of intimacy and discomfort with closeness.',
    prompt: 'Which attachment pattern does this mirror?',
    options: [
      'Insecure-avoidant internal working model predicting distance in romance',
      'Secure attachment leading to trusting intimacy',
      'Disorganised attachment always produces clinginess'
    ],
    correct: 0,
    rationale: 'Hazan & Shaver found avoidant adults report fear of intimacy and prefer emotional distance, reflecting early IWM.'
  },
  {
    id: 6,
    title: 'Positive trajectory despite risk',
    details: 'Early institutional care; later sensitive foster placement.',
    prompt: 'What is the best interpretation?',
    options: [
      'Attachment outcomes are probabilistic; good later care can promote recovery',
      'Early risk guarantees poor outcomes regardless of later care',
      'Internal working models never change after age two'
    ],
    correct: 0,
    rationale: 'Evidence shows risk is probabilistic, not destiny; high-quality later caregiving can improve trajectories.'
  }
];

export default function Lesson8Simulation({ isPresentation }: Lesson8SimulationProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const scenario = scenarios[current];
  const progress = useMemo(() => (current / scenarios.length) * 100, [current]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === scenario.correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (current === scenarios.length - 1) {
      setComplete(true);
      return;
    }
    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setComplete(false);
  };

  if (complete) {
    return (
      <div className={`flex flex-col h-full ${isPresentation ? 'gap-8 p-8' : 'gap-6 p-5'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-slate-300" size={isPresentation ? 32 : 24} />
            <div>
              <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Simulation complete</p>
              <p className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Score: {score} / {scenarios.length}</p>
            </div>
          </div>
          <button
            onClick={handleRestart}
            className={`flex items-center gap-2 bg-gray-800 border border-slate-400/50 text-slate-200 rounded-xl hover:bg-gray-700 transition px-4 py-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}
          >
            <RefreshCcw size={isPresentation ? 18 : 16} /> Restart
          </button>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isPresentation ? 'gap-8' : 'gap-6'}`}>
          {scenarios.map((s) => (
            <div key={s.id} className="bg-gray-800 rounded-xl border border-slate-500/40 p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Home className="text-slate-200" size={18} />
                <p className="text-white font-semibold">{s.title}</p>
              </div>
              <p className="text-gray-400 text-sm mb-2">{s.details}</p>
              <p className="text-slate-200 text-sm">{s.rationale}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full ${isPresentation ? 'gap-6 p-8' : 'gap-4 p-4'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HeartPulse className="text-slate-200" size={isPresentation ? 28 : 22} />
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Outcome Explorer</p>
            <p className="text-white font-bold">{scenario.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-800 border border-slate-400/50 rounded-lg px-3 py-2">
            <TrendingUp className="text-slate-200" size={isPresentation ? 18 : 16} />
            <span className={`text-slate-100 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>{score}/{scenarios.length}</span>
          </div>
          <div className="w-32 bg-gray-800 h-2 rounded-full overflow-hidden border border-gray-700">
            <div className="h-full bg-slate-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className={`bg-gray-800 rounded-xl border border-slate-500/40 shadow-lg ${isPresentation ? 'p-8' : 'p-5'}`}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className={`text-slate-200 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>{scenario.details}</p>
            <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Scenario {current + 1} of {scenarios.length}</p>
          </div>
          <Baby className="text-slate-200" size={isPresentation ? 24 : 20} />
        </div>

        <h3 className={`text-white font-bold mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>{scenario.prompt}</h3>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${isPresentation ? 'gap-4' : 'gap-3'}`}>
          {scenario.options.map((opt, idx) => {
            const isCorrect = selected !== null && idx === scenario.correct;
            const isWrong = selected === idx && idx !== scenario.correct;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`text-left rounded-xl border transition-all ${isPresentation ? 'p-5 text-base' : 'p-4 text-sm'}
                  ${selected === null ? 'bg-gray-900/70 border-gray-700 hover:border-slate-300/60 hover:bg-gray-800' : ''}
                  ${isCorrect ? 'bg-green-900/40 border-green-500/70' : ''}
                  ${isWrong ? 'bg-red-900/40 border-red-500/70' : ''}`}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? <CheckCircle size={18} className="text-green-400 mt-0.5" /> : isWrong ? <XCircle size={18} className="text-red-400 mt-0.5" /> : <Info size={18} className="text-slate-200 mt-0.5" />}
                  <span className="text-gray-200">{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`mt-4 rounded-lg border border-slate-400/50 bg-gray-900/40 ${isPresentation ? 'p-4' : 'p-3'}`}>
            <p className="text-slate-100 text-sm">{scenario.rationale}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 border border-slate-400/60 text-slate-100 transition ${selected === null ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
