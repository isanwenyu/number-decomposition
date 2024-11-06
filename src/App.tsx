import React, { useState } from 'react';
import { NumberTree } from './components/NumberTree';
import { Settings, X } from 'lucide-react';
import { ShapeType } from './components/NumberNode';

function App() {
  const [maxNumber, setMaxNumber] = useState(5);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedShape, setSelectedShape] = useState<ShapeType>('heart');

  const shapes: { value: ShapeType; label: string }[] = [
    { value: 'circle', label: 'Circle' },
    { value: 'square', label: 'Square' },
    { value: 'heart', label: 'Heart' },
    { value: 'star', label: 'Star' },
  ];

  const allDecompositions = Array.from({ length: maxNumber }, (_, i) => i + 1)
    .flatMap(n => {
      const pairs: { number: number; left: number; right: number }[] = [];
        for (let i = 1; i < n; i++) {
          if (i + (n - i) === n) {
            pairs.push({ number: n, left: "", right: "" });
            // pairs.push({ number: n, left: i, right: n - i });
          }
        }
      return pairs;
    }).sort(() => 0.5 - Math.random());

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Number Decomposition
          </h1>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Settings Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          showSettings ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
            <button
              onClick={() => setShowSettings(false)}
              className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Number (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={maxNumber}
                onChange={(e) => setMaxNumber(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Node Shape
              </label>
              <div className="grid grid-cols-2 gap-2">
                {shapes.map((shape) => (
                  <button
                    key={shape.value}
                    onClick={() => setSelectedShape(shape.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${selectedShape === shape.value
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {shape.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {allDecompositions.map((decomp, index) => (
            <div 
              key={`${decomp.number}-${decomp.left}-${decomp.right}-${index}`}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <NumberTree
                number={decomp.number}
                left={decomp.left}
                right={decomp.right}
                shape={selectedShape}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;