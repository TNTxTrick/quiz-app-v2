import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

/**
 * Modern Minimalist Design - QuizApp Component
 * 
 * Design Philosophy:
 * - Minimalist layout with card-based UI
 * - Blue accent color (Oklch: 0.623 0.214 259.815) for primary actions
 * - Poppins font for titles, Inter for body text
 * - Smooth transitions (200ms) for all interactions
 * - Clear visual feedback on hover and selection
 */

export default function QuizApp() {
  const [subject, setSubject] = useState<'physics' | 'english'>('physics');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load questions from data.txt
  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        const dataFile = subject === 'physics' ? '/data.txt' : '/data_en.txt';
        const response = await fetch(dataFile);
        const text = await response.text();
        
        // Parse the data.txt format
        // Format: question|option1|option2|option3|option4|correctAnswerIndex(0-3)
        const lines = text.trim().split('\n');
        const parsedQuestions: Question[] = lines.map(line => {
          const parts = line.split('|');
          const correctAnswerIndex = parseInt(parts[parts.length - 1]);
          const options = parts.slice(1, -1);
          
          return {
            question: parts[0],
            options: options,
            correctAnswerIndex: correctAnswerIndex
          };
        });
        
        setQuestions(parsedQuestions);
        setSelectedAnswers(new Array(parsedQuestions.length).fill(-1));
        setCurrentQuestionIndex(0);
        setShowResults(false);
        setLoading(false);
      } catch (error) {
        console.error('Error loading questions:', error);
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subject]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-border border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Đang tải câu hỏi...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Không có câu hỏi nào được tải.</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswerIndex = selectedAnswers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
  };

  if (showResults) {
    const correctCount = selectedAnswers.filter((answerIndex, questionIndex) => {
      return answerIndex === questions[questionIndex].correctAnswerIndex;
    }).length;

    return (
      <div className="min-h-screen bg-background pt-20 pb-12 px-4">
        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl text-accent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              QuizApp
            </div>
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              <button
                onClick={() => setSubject('physics')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  subject === 'physics' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Vật lý
              </button>
              <button
                onClick={() => setSubject('english')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  subject === 'english' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Tiếng Anh
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center shadow-lg">
            <h1 className="font-bold text-3xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kết quả của bạn
            </h1>
            <div className="mb-8">
              <div className="text-6xl font-bold text-accent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {correctCount}/{questions.length}
              </div>
              <p className="text-foreground text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Bạn trả lời đúng {correctCount} trong {questions.length} câu hỏi
              </p>
              <p className="text-muted-foreground mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tỷ lệ: {Math.round((correctCount / questions.length) * 100)}%
              </p>
            </div>
            <Button 
              onClick={handleRestart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Làm lại
            </Button>
          </Card>

          {/* Review answers */}
          <div className="mt-8 space-y-4">
            <h2 className="font-bold text-2xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Xem lại câu trả lời
            </h2>
            {questions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.correctAnswerIndex;
              const selectedOption = selectedAnswers[index] >= 0 ? question.options[selectedAnswers[index]] : 'Không chọn';
              const correctOption = question.options[question.correctAnswerIndex];
              
              return (
                <Card key={index} className="p-4 border-l-4 shadow-sm" style={{
                  borderLeftColor: isCorrect ? '#3b82f6' : '#ef4444'
                }}>
                  <p className="font-medium text-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Câu {index + 1}: {question.question}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Câu trả lời của bạn: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {selectedOption}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Câu trả lời đúng: {correctOption}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-12 px-4">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-accent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            QuizApp
          </div>
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setSubject('physics')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                subject === 'physics' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Vật lý
            </button>
            <button
              onClick={() => setSubject('english')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                subject === 'english' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tiếng Anh
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto">
        {/* Header with progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-bold text-2xl text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Bài kiểm tra
            </h1>
            <span className="font-medium text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
              Câu {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-lg mb-8">
          <h2 className="font-bold text-xl text-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = currentAnswerIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium
                    ${isSelected 
                      ? 'border-accent bg-accent/5 text-foreground shadow-md scale-[1.02]' 
                      : 'border-border bg-background text-foreground hover:border-accent/50 hover:bg-accent/2'
                    }
                  `}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all duration-200
                      ${isSelected 
                        ? 'border-accent bg-accent' 
                        : 'border-border'
                      }
                    `}>
                      {isSelected && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="flex items-center gap-2 font-medium transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <ChevronLeft className="w-4 h-4" />
            Câu trước
          </Button>

          <Button
            onClick={handleNext}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp'}
            {currentQuestionIndex < questions.length - 1 && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
