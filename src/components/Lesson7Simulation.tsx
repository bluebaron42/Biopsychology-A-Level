import { useMemo, useState } from 'react';
import { Globe2, MapPin, BarChart3, CheckCircle, XCircle, RefreshCcw, Info } from 'lucide-react';

interface Scenario {
  id: number;
  country: string;
  study: string;
  secure: number;
  avoidant: number;
  resistant: number;
  prompt: string;
  options: string[];
  correct: number;
  rationale: string;
}

interface Lesson7SimulationProps {
  isPresentation: boolean;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    country: 'Great Britain',
    study: 'van IJzendoorn & Kroonenberg (meta-analysis)',
    secure: 75,
    avoidant: 22,
    resistant: 3,
    prompt: 'What is the best interpretation of this distribution?',
    options: [
      'Secure attachment is the cultural norm, supporting universality',
      'Avoidant attachment dominates; Strange Situation is invalid',
      'Resistant attachment is the most common in Britain'
    ],
    correct: 0,
    rationale: 'Across cultures, secure attachment was the modal type. Britain had one of the highest secure rates, supporting a universal norm.'
  },
  {
    id: 2,
    country: 'Germany',
    study: 'van IJzendoorn & Kroonenberg (meta-analysis)',
    secure: 57,
    avoidant: 35,
    resistant: 8,
    prompt: 'Which takeaway best fits these data?',
    options: [
      'High avoidant rates may reflect independence socialisation rather than insecurity',
      'High avoidant rates show German infants lack attachment',
      'Resistant attachment is unusually high due to overprotection'
    ],
    correct: 0,
    rationale: 'Greater avoidant classification can reflect cultural norms valuing independence, highlighting imposed etic concerns.'
  },
  {
    id: 3,
    country: 'Japan',
    study: 'van IJzendoorn & Kroonenberg (meta-analysis)',
    secure: 68,
    avoidant: 5,
    resistant: 27,
    prompt: 'Why might resistant attachment be elevated here?',
    options: [
      'Long separations make infants avoidant',
      'Close proximity caregiving can amplify distress on separation, inflating resistant classifications',
      'Resistant attachment is purely genetic in Japan'
    ],
    correct: 1,
    rationale: 'Prolonged close contact means separation is rare; the Strange Situation may overclassify distress as resistant (imposed etic risk).'  
  },
  {
    id: 4,
    country: 'China',
    study: 'van IJzendoorn & Kroonenberg (meta-analysis)',
    secure: 50,
    avoidant: 25,
    resistant: 25,
    prompt: 'What headline finding stands out?',
    options: [
      'Lowest secure proportion in the sample (~50%)',
      'Resistant attachment is absent in China',
      'Avoidant attachment is at 75%'
    ],
    correct: 0,
    rationale: 'China showed the lowest secure proportion (~50%), illustrating between-country variation while keeping secure as modal.'
  },
  {
    id: 5,
    country: 'Italy',
    study: 'Simonelli et al. (2014)',
    secure: 50,
    avoidant: 36,
    resistant: 14,
    prompt: 'Which conclusion matches this contemporary sample?',
    options: [
      'More avoidant infants likely reflect increased maternal employment and childcare use',
      'Avoidant levels fell because fathers are primary caregivers',
      'Resistant attachment dominated due to co-sleeping practices'
    ],
    correct: 0,
    rationale: 'Simonelli et al. linked higher avoidant rates to working mothers and professional childcare use.'
  },
  {
    id: 6,
    country: 'Korea',
    study: 'Jin et al. (2012)',
    secure: 65,
    avoidant: 3,
    resistant: 32,
    prompt: 'What similarity to another country is most important?',
    options: [
      'Pattern mirrors Japan with very low avoidant and elevated resistant classifications',
      'Pattern matches Germany with high avoidant',
      'Pattern shows no secure attachments'
    ],
    correct: 0,
    rationale: 'Like Japan, Korea showed very low avoidant and higher resistant, matching similar proximity-focused caregiving norms.'
  }
];

export default function Lesson7Simulation({ isPresentation }: Lesson7SimulationProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const scenario = scenarios[current];

  const progress = useMemo(() => ((current) / scenarios.length) * 100, [current]);

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
            <CheckCircle className="text-purple-400" size={isPresentation ? 32 : 24} />
            <div>
              <p className={`text-gray-400 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Simulation complete</p>
              <p className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Score: {score} / {scenarios.length}</p>
            </div>
          </div>
          <button
            onClick={handleRestart}
            className={`flex items-center gap-2 bg-gray-800 border border-purple-500/50 text-purple-300 rounded-xl hover:bg-gray-700 transition px-4 py-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}
          >
            <RefreshCcw size={isPresentation ? 18 : 16} /> Restart
          </button>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isPresentation ? 'gap-8' : 'gap-6'}`}>
          {scenarios.map((s) => (
            <div key={s.id} className="bg-gray-800 rounded-xl border border-purple-500/40 p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="text-purple-400" size={18} />
                <p className="text-white font-semibold">{s.country}</p>
                <span className="text-gray-500 text-xs">{s.study}</span>
              </div>
              <div className="flex gap-3 text-sm text-gray-300 mb-3">
                <span className="text-green-300">Secure {s.secure}%</span>
                <span className="text-blue-300">Avoidant {s.avoidant}%</span>
                <span className="text-red-300">Resistant {s.resistant}%</span>
              </div>
              <p className="text-gray-200 text-sm mb-2">Key takeaway:</p>
              <p className="text-purple-200 text-sm">{s.rationale}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full ${isPresentation ? 'gap-6 p-8' : 'gap-4 p-4'}`}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="text-purple-400" size={isPresentation ? 28 : 22} />
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Global Dataset</p>
              <p className="text-white font-bold">{scenario.country} · {scenario.study}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-800 border border-purple-500/40 rounded-lg px-3 py-2">
              <BarChart3 className="text-purple-400" size={isPresentation ? 18 : 16} />
              <span className={`text-purple-200 font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>{score}/{scenarios.length}</span>
            </div>
            <div className="w-32 bg-gray-800 h-2 rounded-full overflow-hidden border border-gray-700">
              <div className="h-full bg-purple-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="bg-gray-800 rounded-lg border border-green-500/40 px-3 py-2 text-green-200">Secure: {scenario.secure}%</div>
          <div className="bg-gray-800 rounded-lg border border-blue-500/40 px-3 py-2 text-blue-200">Avoidant: {scenario.avoidant}%</div>
          <div className="bg-gray-800 rounded-lg border border-red-500/40 px-3 py-2 text-red-200">Resistant: {scenario.resistant}%</div>
        </div>
      </div>

      <div className={`bg-gray-800 rounded-xl border border-purple-500/40 shadow-lg flex-grow ${isPresentation ? 'p-8' : 'p-5'}`}>
        <p className={`text-purple-200 font-semibold mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Prompt</p>
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
                  ${selected === null ? 'bg-gray-900/70 border-gray-700 hover:border-purple-400/60 hover:bg-gray-800' : ''}
                  ${isCorrect ? 'bg-green-900/40 border-green-500/70' : ''}
                  ${isWrong ? 'bg-red-900/40 border-red-500/70' : ''}`}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? <CheckCircle size={18} className="text-green-400 mt-0.5" /> : isWrong ? <XCircle size={18} className="text-red-400 mt-0.5" /> : <Info size={18} className="text-purple-300 mt-0.5" />}
                  <span className="text-gray-200">{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`mt-4 rounded-lg border border-purple-500/50 bg-purple-900/20 ${isPresentation ? 'p-4' : 'p-3'}`}>
            <p className="text-purple-200 text-sm">{scenario.rationale}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">Scenario {current + 1} of {scenarios.length}</p>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 border border-purple-500/60 text-purple-200 transition ${selected === null ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-900/40'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
