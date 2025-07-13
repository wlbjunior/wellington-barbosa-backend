import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scale, CalendarDays } from 'lucide-react';
import psicologiaJuridicaTimelineData from './data/psicologiaJuridicaTimelineData';

function PsicologiaJuridicaTimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Linha do Tempo da Psicologia Jurídica</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore os marcos históricos e o desenvolvimento da Psicologia Jurídica no Brasil e no mundo.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          {psicologiaJuridicaTimelineData.map((period, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{period.year.substring(0, 4)}</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{period.title}</h3>
                {period.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-4 last:mb-0">
                    <p className="text-sm font-semibold text-gray-700 mb-1">{event.date}</p>
                    <p className="text-base text-gray-600"><strong>{event.title}:</strong> {event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PsicologiaJuridicaTimelinePage;


