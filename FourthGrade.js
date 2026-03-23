import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, Trophy, CheckCircle, ChevronRight, Info, 
  Book, MessageSquare, Lightbulb, Loader2, RefreshCw, 
  ChevronLeft, XCircle, HelpCircle, AlertCircle
} from 'lucide-react';

const wordData = [
  {
    "word": "knoll",
    "pos": ["noun"],
    "definitions": { "noun": "A small, rounded hill." },
    "synonyms": ["hillock", "mound", "small hill"],
    "antonyms": ["valley", "glen"],
    "competitionNote": "Landform word. Often used in size/height contrasts (knoll vs. summit) or high point vs. low point (knoll vs. glen/valley).",
    "examples": ["We set up our picnic on a grassy knoll."]
  },
  {
    "word": "intrude",
    "pos": ["verb"],
    "definitions": { "verb": "To enter or get involved when you are not wanted or invited." },
    "synonyms": ["trespass", "meddle", "interfere", "butt in"],
    "antonyms": ["withdraw", "retreat", "leave"],
    "competitionNote": "Often matches ideas like \"unwelcome\" or \"privacy.\" In analogies, it can pair with busybody or pry (action-to-person or action-to-action).",
    "examples": ["I didn't mean to intrude on your private conversation."]
  },
  {
    "word": "tidy",
    "pos": ["adjective", "verb"],
    "definitions": {
      "adjective": "Neat and in good order.",
      "verb": "To make neat or put in order."
    },
    "synonyms": ["neat", "orderly", "clean", "organize"],
    "antonyms": ["slovenly", "messy", "disorderly"],
    "competitionNote": "Watch part of speech: tidy (adj) describes something; tidy (v) is the action of cleaning/organizing.",
    "examples": ["She kept a very tidy desk.", "Please tidy your room before guests arrive."]
  },
  {
    "word": "dab",
    "pos": ["noun", "verb"],
    "definitions": {
      "noun": "A small amount of something.",
      "verb": "To touch or press lightly, often again and again."
    },
    "synonyms": ["smidgen", "tiny bit", "touch lightly", "pat"],
    "antonyms": ["lots", "heap", "smear"],
    "competitionNote": "Often tests small amount vs. large amount (dab vs. vat) or light touch vs. heavy spreading (dab vs. smear).",
    "examples": ["I just need a dab of glue for this craft.", "He used a napkin to dab his mouth."]
  },
  {
    "word": "jangle",
    "pos": ["verb", "noun"],
    "definitions": {
      "verb": "To make a harsh, ringing sound (like metal objects hitting).",
      "noun": "A harsh, ringing sound."
    },
    "synonyms": ["clatter", "clink", "rattle", "clang"],
    "antonyms": ["silence", "quiet", "soothe"],
    "competitionNote": "Sound word. Compare with peal: peal is loud and clear (bells/thunder), while jangle is often messy or harsh (keys).",
    "examples": ["The keys began to jangle in her pocket.", "The loud jangle of the alarm woke him up."]
  },
  {
    "word": "shortsighted",
    "pos": ["adjective"],
    "definitions": { "adjective": "Not able to see far; or not thinking about future results." },
    "synonyms": ["nearsighted", "short-term", "rash", "thoughtless"],
    "antonyms": ["farsighted", "wise", "thoughtful"],
    "competitionNote": "Double meaning: literal vision + figurative planning. Great for analogy traps (eyes vs. decisions).",
    "examples": ["It was shortsighted of him to spend all his allowance on the first day."]
  },
  {
    "word": "tureen",
    "pos": ["noun"],
    "definitions": { "noun": "A deep dish (often with a lid) used for serving soup or stew." },
    "synonyms": ["serving bowl", "dish", "container", "vessel"],
    "antonyms": [],
    "competitionNote": "Function word: a tureen holds soup, like a vat holds a large amount of liquid.",
    "examples": ["The waiter carried a large tureen of soup to the table."]
  },
  {
    "word": "recede",
    "pos": ["verb"],
    "definitions": { "verb": "To move back or farther away." },
    "synonyms": ["retreat", "withdraw", "fade"],
    "antonyms": ["advance", "approach", "come closer"],
    "competitionNote": "Often used with water (the tide recedes) or with sound/light (a noise recedes).",
    "examples": ["We watched the floodwaters finally begin to recede."]
  },
  {
    "word": "slovenly",
    "pos": ["adjective"],
    "definitions": { "adjective": "Messy, untidy, or careless in appearance or habits." },
    "synonyms": ["messy", "unkempt", "sloppy"],
    "antonyms": ["tidy", "neat", "careful"],
    "competitionNote": "Even though it ends in -ly, it is an adjective (not an adverb). Strong antonym with tidy.",
    "examples": ["He was scolded for his slovenly appearance."]
  },
  {
    "word": "dollop",
    "pos": ["noun"],
    "definitions": { "noun": "A soft, roundish lump of something (often food)." },
    "synonyms": ["blob", "glob", "dab"],
    "antonyms": ["vat", "ocean"],
    "competitionNote": "Related to dab: both are small amounts, but dollop often refers to soft food (like cream).",
    "examples": ["I love a big dollop of whipped cream on my pie."]
  },
  {
    "word": "retreat",
    "pos": ["verb", "noun"],
    "definitions": {
      "verb": "To move back or away, especially from danger.",
      "noun": "A place to rest or be safe; or the act of moving back."
    },
    "synonyms": ["recede", "withdraw", "hideaway", "safe place"],
    "antonyms": ["advance", "attack", "approach"],
    "competitionNote": "Double meaning: action (move back) vs. place (a quiet getaway).",
    "examples": ["The general ordered the army to retreat.", "The cabin was a peaceful weekend retreat."]
  },
  {
    "word": "short-handed",
    "pos": ["adjective"],
    "definitions": { "adjective": "Not having enough people to do the work." },
    "synonyms": ["understaffed", "lacking", "shorthanded", "deficient"],
    "antonyms": ["fully staffed", "well supplied"],
    "competitionNote": "Often connects to deficient: short-handed means deficient in workers/help.",
    "examples": ["The restaurant was short-handed because three waiters called in sick."]
  },
  {
    "word": "glen",
    "pos": ["noun"],
    "definitions": { "noun": "A narrow valley, often with a stream." },
    "synonyms": ["valley", "dale", "hollow"],
    "antonyms": ["summit", "ridge", "knoll", "peak"],
    "competitionNote": "Low area between hills. Strong contrast with summit/ridge/peak (high points).",
    "examples": ["The hikers rested by the stream in the peaceful glen."]
  },
  {
    "word": "corrode",
    "pos": ["verb"],
    "definitions": { "verb": "To slowly damage or destroy (especially metal) by a chemical action, like rust." },
    "synonyms": ["rust", "wear away", "eat away", "decay"],
    "antonyms": ["build", "restore", "strengthen"],
    "competitionNote": "Often compared with decay: metal corrodes, while plants/teeth/wood may decay.",
    "examples": ["Saltwater can corrode metal over time."]
  },
  {
    "word": "deficient",
    "pos": ["adjective"],
    "definitions": { "adjective": "Not having enough of something that is needed; lacking." },
    "synonyms": ["lacking", "inadequate", "insufficient", "short-handed"],
    "antonyms": ["sufficient", "adequate", "plentiful"],
    "competitionNote": "Useful for analogies about not enough (deficient) vs. enough (sufficient).",
    "examples": ["A diet of only candy is deficient in nutrients."]
  },
  {
    "word": "busybody",
    "pos": ["noun"],
    "definitions": { "noun": "A person who meddling in other people's business." },
    "synonyms": ["nosy person", "meddler", "snoop", "gossip"],
    "antonyms": ["private person", "someone who keeps to themself"],
    "competitionNote": "Person-to-action link: a busybody may pry or intrude.",
    "examples": ["The neighborhood busybody was always peeking through her curtains."]
  },
  {
    "word": "pry",
    "pos": ["verb"],
    "definitions": {
      "verb": "To ask about private things; or to force something open."
    },
    "synonyms": ["snoop", "intrude", "force open", "lever"],
    "antonyms": ["respect privacy", "leave alone"],
    "competitionNote": "Double meaning: pry into secrets (social) vs. pry open a lid (physical). Great for tricky analogies.",
    "examples": ["I don't want to pry, but are you okay?", "We used a tool to pry the crate open."]
  },
  {
    "word": "rash",
    "pos": ["noun", "adjective"],
    "definitions": {
      "noun": "A group of red spots on the skin.",
      "adjective": "Hasty and not careful about results."
    },
    "synonyms": ["skin outbreak", "hasty", "reckless", "shortsighted"],
    "antonyms": ["careful", "cautious", "thoughtful"],
    "competitionNote": "Double meaning. As an adjective, rash is close to shortsighted (not thinking ahead).",
    "examples": ["Poison ivy gave him an itchy rash.", "It was rash to quit without a plan."]
  },
  {
    "word": "summit",
    "pos": ["noun"],
    "definitions": { "noun": "The highest point of a mountain or hill; also, a meeting of leaders." },
    "synonyms": ["peak", "top", "highest point", "meeting"],
    "antonyms": ["base", "bottom", "glen", "valley"],
    "competitionNote": "Double meaning: geography (highest point) and politics (a leaders' meeting). Often contrasts with glen/valley.",
    "examples": ["It took three days to reach the mountain's summit."]
  },
  {
    "word": "decay",
    "pos": ["verb", "noun"],
    "definitions": {
      "verb": "To rot or break down over time.",
      "noun": "The process of rotting or falling into ruin."
    },
    "synonyms": ["rot", "spoil", "deteriorate", "corrode"],
    "antonyms": ["flourish", "grow", "improve"],
    "competitionNote": "Pairs well with corrode: teeth/leaves decay; metal corrodes.",
    "examples": ["Too much sugar can cause tooth decay.", "Fallen leaves decay and enrich the soil."]
  },
  {
    "word": "hectic",
    "pos": ["adjective"],
    "definitions": { "adjective": "Very busy, with lots of rushing and confusion." },
    "synonyms": ["chaotic", "frantic", "busy", "wild"],
    "antonyms": ["calm", "peaceful", "relaxing"],
    "competitionNote": "Describes a schedule or scene with lots happening at once.",
    "examples": ["The airport was hectic the day before Thanksgiving."]
  },
  {
    "word": "ridge",
    "pos": ["noun"],
    "definitions": { "noun": "A long, narrow raised hilltop or mountain edge." },
    "synonyms": ["crest", "raised edge", "spine"],
    "antonyms": ["valley", "glen", "trench"],
    "competitionNote": "High, raised landform. Often contrasts with valley/glen (low land).",
    "examples": ["We hiked along the rocky ridge."]
  },
  {
    "word": "peal",
    "pos": ["noun", "verb"],
    "definitions": {
      "noun": "A loud, clear ringing sound (like bells or thunder).",
      "verb": "To ring loudly and clearly."
    },
    "synonyms": ["ring", "chime", "clang", "boom"],
    "antonyms": ["silence", "quiet", "whisper"],
    "competitionNote": "Compare with jangle: peal is clear and strong; jangle is harsher and messier.",
    "examples": ["A peal of thunder shook the house.", "The church bells began to peal."]
  },
  {
    "word": "auburn",
    "pos": ["adjective", "noun"],
    "definitions": {
      "adjective": "A reddish-brown color, often used for hair.",
      "noun": "A reddish-brown color."
    },
    "synonyms": ["reddish-brown", "russet", "chestnut"],
    "antonyms": [],
    "competitionNote": "Precise color word (often hair or autumn leaves). Great for color-category analogies.",
    "examples": ["Her auburn hair shone in the sunlight."]
  },
  {
    "word": "vat",
    "pos": ["noun"],
    "definitions": { "noun": "A very large container for holding liquid." },
    "synonyms": ["tank", "tub", "barrel", "container"],
    "antonyms": ["dab", "dollop", "drop"],
    "competitionNote": "Size and function: vat holds a huge amount of liquid; dab/dollop/drop are tiny amounts.",
    "examples": ["The factory uses a giant vat to mix the ingredients."]
  }
];

const apiKey = "";

export default function App() {
  const [currentTab, setCurrentTab] = useState('study');
  
  // Study State
  const [selectedWord, setSelectedWord] = useState(wordData[0]);
  const [viewedWords, setViewedWords] = useState(new Set());
  const detailViewRef = useRef(null);

  // Challenge State
  const [challengeState, setChallengeState] = useState('idle'); // idle, loading, quiz, results
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [generationProgress, setGenerationProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  
  // Used to prevent background generation from running if we reset the quiz
  const generationSessionId = useRef(0);

  useEffect(() => {
    if (currentTab === 'study' && selectedWord) {
      setViewedWords(prev => new Set(prev).add(selectedWord.word));
      if (detailViewRef.current) {
        detailViewRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [selectedWord, currentTab]);

  const callGemini = async (prompt, systemPrompt, retryCount = 0) => {
    const delays = [1000, 2000, 4000, 8000, 16000];
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                targetWord: { type: "STRING" },
                question: { type: "STRING" },
                options: { type: "ARRAY", items: { type: "STRING" } },
                correctIndex: { type: "NUMBER" },
                explanation: { type: "STRING" }
              },
              required: ["targetWord", "question", "options", "correctIndex", "explanation"]
            }
          }
        })
      });
      if (!response.ok) throw new Error('Failed to fetch from Gemini');
      const data = await response.json();
      return JSON.parse(data.candidates?.[0]?.content?.parts?.[0]?.text || "{}");
    } catch (err) {
      if (retryCount < 5) {
        await new Promise(resolve => setTimeout(resolve, delays[retryCount]));
        return callGemini(prompt, systemPrompt, retryCount + 1);
      }
      throw err;
    }
  };

  const startChallenge = async () => {
    setChallengeState('loading');
    setGenerationProgress(0);
    setErrorMessage(null);
    setQuestions([]);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    const currentSession = ++generationSessionId.current;
    const shuffled = [...wordData].sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 20);

    const systemPrompt = `You are an expert creator of "WordMasters Challenge" analogy questions for 4th Grade G&T students. 
    Create ONE challenging analogy question where the TARGET WORD is either used in the analogy prompt OR is the correct answer. 
    CRITICAL RULES:
    1. Use the exact format: "A : B :: C : ".
    2. Use the target word as distractor (incorrect option) whenever possible.
    3. The correct answer does NOT always need to be the target word.
    4. Test clear logical relationships: part-to-whole, location, function, intensity, etc.
    5. Difficulty level: 4th Grade G&T. 
    6. Distractors must be plausible.
    7. Return valid JSON only.`;

    try {
      const q1 = await callGemini(`Create a question for the word: ${selectedWords[0].word}`, systemPrompt);
      if (currentSession !== generationSessionId.current) return;
      setQuestions([q1]);
      setGenerationProgress(1);
      setChallengeState('quiz');
      for (let i = 1; i < selectedWords.length; i++) {
        const q = await callGemini(`Create a question for the word: ${selectedWords[i].word}`, systemPrompt);
        if (currentSession !== generationSessionId.current) break;
        setQuestions(prev => [...prev, q]);
        setGenerationProgress(i + 1);
      }
    } catch (err) {
      if (currentSession === generationSessionId.current) {
        setErrorMessage("Oops! We had trouble reaching the quiz generator. Please try again.");
        setChallengeState('idle');
      }
    }
  };

  const handleAnswerSelection = (optionIndex) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optionIndex }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < 19) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setChallengeState('results');
    }
  };

  const score = useMemo(() => {
    return questions.reduce((acc, q, idx) => {
      if (!q) return acc;
      return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);
  }, [questions, userAnswers]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Trophy size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800 leading-tight">WordMasters</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">4th Grade G&T Challenge</p>
          </div>
        </div>
        <nav className="flex bg-slate-100 p-1 rounded-xl">
          <button onClick={() => setCurrentTab('study')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${currentTab === 'study' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
            <BookOpen size={18} /> Word Study
          </button>
          <button onClick={() => setCurrentTab('challenge')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${currentTab === 'challenge' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
            <Trophy size={18} /> Challenge
          </button>
        </nav>
      </header>

      <main className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {currentTab === 'study' ? (
          <div className="flex flex-1 min-h-0 overflow-hidden">
            <div className="w-1/3 border-r border-slate-200 bg-white flex flex-col min-h-0 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
                  <span>Vocabulary List</span>
                  <span>{viewedWords.size} / {wordData.length}</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                {wordData.map((w) => (
                  <button key={w.word} onClick={() => setSelectedWord(w)} className={`w-full text-left p-4 hover:bg-indigo-50/50 transition-colors flex items-center justify-between group ${selectedWord.word === w.word ? 'bg-indigo-50 border-r-4 border-indigo-500' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`transition-opacity ${viewedWords.has(w.word) ? 'text-green-500' : 'text-slate-200 group-hover:text-slate-300'}`}>
                        <CheckCircle size={20} fill={viewedWords.has(w.word) ? 'currentColor' : 'none'} />
                      </div>
                      <span className={`text-lg font-medium capitalize ${selectedWord.word === w.word ? 'text-indigo-700' : 'text-slate-700'}`}>{w.word}</span>
                    </div>
                    <ChevronRight size={18} className={`text-slate-300 transition-transform ${selectedWord.word === w.word ? 'translate-x-1 text-indigo-400' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
            <div ref={detailViewRef} className="flex-1 overflow-y-auto bg-slate-50 p-8 flex justify-center scroll-smooth min-h-0">
              <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-fit animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-black text-slate-800 capitalize mb-2">{selectedWord.word}</h2>
                    <div className="flex gap-2">{selectedWord.pos.map(p => (<span key={p} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold italic tracking-wide">{p}</span>))}</div>
                  </div>
                  <div className="bg-green-50 text-green-700 p-3 rounded-full"><Book size={28} /></div>
                </div>
                <div className="space-y-8">
                  <section>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-3"><Info size={16} /> Definition</h3>
                    <div className="space-y-3">{selectedWord.pos.map(p => (<div key={p} className="flex gap-4 group"><span className="text-xs font-bold text-indigo-300 w-16 pt-1 text-right uppercase tracking-tighter shrink-0">{p}</span><p className="text-slate-700 leading-relaxed text-lg">{selectedWord.definitions[p]}</p></div>))}</div>
                  </section>
                  <section className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-3"><MessageSquare size={16} /> Examples</h3>
                    <ul className="list-disc list-inside space-y-2">{selectedWord.examples.map((ex, i) => (<li key={i} className="text-slate-600 italic leading-relaxed font-serif text-lg">"{ex}"</li>))}</ul>
                  </section>
                  <div className="grid grid-cols-2 gap-6">
                    <section>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Synonyms</h3>
                      <div className="flex flex-wrap gap-2">{selectedWord.synonyms.map(s => (<span key={s} className="px-2 py-1 bg-green-50 text-green-700 rounded text-sm font-medium border border-green-100">{s}</span>))}</div>
                    </section>
                    <section>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Antonyms</h3>
                      <div className="flex flex-wrap gap-2">{selectedWord.antonyms.length > 0 ? selectedWord.antonyms.map(a => (<span key={a} className="px-2 py-1 bg-rose-50 text-rose-700 rounded text-sm font-medium border border-rose-100">{a}</span>)) : <span className="text-slate-400 text-sm italic">None listed</span>}</div>
                    </section>
                  </div>
                  {selectedWord.competitionNote && (
                    <section className="bg-amber-50 rounded-xl p-5 border border-amber-100 flex gap-4">
                      <div className="text-amber-500 shrink-0 mt-1"><Lightbulb size={24} /></div>
                      <div>
                        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Competition Tip</h3>
                        <p className="text-amber-800 leading-relaxed text-sm font-medium">{selectedWord.competitionNote}</p>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center p-6 overflow-y-auto min-h-0">
            {challengeState === 'idle' && (
              <div className="max-w-md w-full my-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
                <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"><Trophy size={40} /></div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">WordMasters Simulation</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">Ready for a challenge? Gemini will generate analogy questions for you in real-time.</p>
                {errorMessage && (<div className="mb-6 p-4 bg-rose-50 text-rose-700 rounded-xl text-sm flex items-center gap-2 text-left"><AlertCircle size={18} className="shrink-0" />{errorMessage}</div>)}
                <button onClick={startChallenge} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"><RefreshCw size={20} /> Start New Challenge</button>
              </div>
            )}
            {challengeState === 'loading' && (
              <div className="max-w-md w-full my-auto text-center">
                <div className="relative w-24 h-24 mx-auto mb-6"><Loader2 size={96} className="text-indigo-600 animate-spin" /></div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Creating Your First Question</h2>
                <p className="text-slate-500 italic font-medium">Gemini is thinking...</p>
              </div>
            )}
            {challengeState === 'quiz' && (
              <div className="max-w-2xl w-full flex flex-col animate-in fade-in duration-500 my-auto">
                <div className="flex justify-between items-end mb-6 shrink-0">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-xs tracking-widest mb-1"><Trophy size={16} /><span>Question {currentQuestionIndex + 1} of 20</span></div>
                    <h3 className="text-slate-400 text-sm font-medium">{generationProgress < 20 ? (<span className="flex items-center gap-2"><Loader2 size={14} className="animate-spin" /> Generating more questions ({generationProgress}/20)...</span>) : "All questions ready!"}</h3>
                  </div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-tighter">{Math.round(((currentQuestionIndex + 1) / 20) * 100)}% Through Test</div>
                </div>
                {!currentQuestion ? (
                  <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 mb-6 text-center"><Loader2 size={48} className="text-indigo-300 animate-spin mx-auto mb-4" /><h2 className="text-xl font-bold text-slate-800 mb-2">Generating Next Question...</h2><p className="text-slate-500">One moment while we prepare the next analogy.</p></div>
                ) : (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
                    <div className="mb-8">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4 block text-center">Analogy Stem</span>
                      <h2 className="text-3xl font-bold text-slate-800 tracking-wide font-serif italic text-center py-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200 leading-relaxed px-4">{currentQuestion.question}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {currentQuestion.options.map((option, idx) => (
                        <button key={idx} onClick={() => handleAnswerSelection(idx)} className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between group ${userAnswers[currentQuestionIndex] === idx ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-600'}`}>
                          <span className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${userAnswers[currentQuestionIndex] === idx ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>{String.fromCharCode(65 + idx)}</span>
                            <span className="text-lg font-medium">{option}</span>
                          </span>
                          {userAnswers[currentQuestionIndex] === idx && <CheckCircle size={20} />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <button disabled={userAnswers[currentQuestionIndex] === undefined || !currentQuestion} onClick={nextQuestion} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0">{currentQuestionIndex === 19 ? 'Finish Test' : 'Next Question'}<ChevronRight size={20} /></button>
              </div>
            )}
            {challengeState === 'results' && (
              <div className="max-w-3xl w-full pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 text-center mb-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 opacity-20" />
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white ${score >= 15 ? 'bg-green-500' : 'bg-amber-500'} shadow-lg`}><Trophy size={40} /></div>
                    <h2 className="text-3xl font-black text-slate-800 mb-1">Challenge Results</h2>
                    <div className="flex items-baseline gap-2 mb-4"><span className="text-5xl font-black text-indigo-600">{score}</span><span className="text-xl font-bold text-slate-300">/ 20</span></div>
                    <p className="text-slate-500 mb-6 font-medium max-w-md">{score === 20 ? "Perfect score! You're a WordMaster!" : score >= 15 ? "Great job!" : "Good effort! Keep practicing."}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button onClick={startChallenge} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2"><RefreshCw size={18} /> New Challenge</button>
                      <button onClick={() => setCurrentTab('study')} className="px-6 py-3 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">Back to Study</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 mb-4">Detailed Review</h3>
                  {questions.map((q, idx) => (
                    <div key={idx} className={`bg-white rounded-2xl border overflow-hidden ${userAnswers[idx] === q.correctIndex ? 'border-green-100' : 'border-rose-100 shadow-sm shadow-rose-50'}`}>
                      <div className={`px-6 py-3 flex justify-between items-center ${userAnswers[idx] === q.correctIndex ? 'bg-green-50 text-green-700' : 'bg-rose-50 text-rose-700'}`}>
                        <div className="flex items-center gap-2 font-bold text-sm">
                          {userAnswers[idx] === q.correctIndex ? <CheckCircle size={18} /> : <XCircle size={18} />}
                          Question {idx + 1}
                        </div>
                        {/* Target Word label removed as requested */}
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif italic leading-relaxed">{q.question}</h3>
                        <div className="grid grid-cols-1 gap-2 mb-6">
                          {q.options.map((opt, optIdx) => (
                            <div key={optIdx} className={`p-3 rounded-xl flex items-center justify-between ${optIdx === q.correctIndex ? 'bg-green-50 text-green-800 border border-green-200 font-bold' : (optIdx === userAnswers[idx] ? 'bg-rose-50 text-rose-800 border border-rose-200' : 'bg-slate-50 text-slate-500 opacity-60')}`}>
                              <span className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded flex items-center justify-center text-xs bg-white border border-current">{String.fromCharCode(65 + optIdx)}</span>
                                {opt}
                              </span>
                              {optIdx === q.correctIndex && <CheckCircle size={16} />}
                              {optIdx === userAnswers[idx] && optIdx !== q.correctIndex && <XCircle size={16} />}
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 flex gap-4">
                          <HelpCircle className="text-indigo-400 shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-sm font-bold text-indigo-900 mb-1">Relationship Explanation</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">
        <div className="flex items-center gap-4">
          {currentTab === 'study' && (
            <>
              <span>Words Mastered</span>
              <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 transition-all duration-500 ease-out" style={{ width: `${(viewedWords.size / wordData.length) * 100}%` }}></div>
              </div>
              <span className="text-slate-600">{Math.round((viewedWords.size / wordData.length) * 100)}%</span>
            </>
          )}
        </div>
        <div>List 1: 2024-2025 Challenge</div>
      </footer>
    </div>
  );
}
