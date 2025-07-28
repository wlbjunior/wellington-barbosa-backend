import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ArrowLeft, Calendar, BookOpen, Clock, Users } from 'lucide-react';

function FilosofiaTimelinePage() {
  const [timelineData, setTimelineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch('https://wellington-barbosa-backend.onrender.com/api/filosofia/timeline' );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTimelineData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Carregando linha do tempo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <p className="text-xl text-red-500">Erro ao carregar a linha do tempo: {error.message}</p>
        <Link to="/filosofia">
          <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
            Voltar para Filosofia
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/filosofia" className="text-orange-600 hover:text-orange-700 flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar para Filosofia</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Linha do Tempo da Filosofia</h1>
            <div></div> {/* Placeholder para centralizar o título */}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Uma jornada completa através da história do pensamento filosófico mundial, 
            desde os pré-socráticos até os pensadores contemporâneos.
          </p>
        </div>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-300 h-full"></div>

          {timelineData.map((period, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              
              <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>

              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl flex items-center"><Calendar className="w-5 h-5 mr-2" />{period.periodo}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 mb-2 flex items-center"><Clock className="w-4 h-4 mr-1" />{period.anos}</p>
                <p className="text-base text-gray-700 mb-4">{period.descricao}</p>
                
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Users className="w-4 h-4 mr-1" />Principais Filósofos:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {period.filosofos.map((filosofo, i) => (
                    <li key={i}>{filosofo}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilosofiaTimelinePage;
