"use client"
import { useEffect, useState } from 'react';
import Tool from './Tool';
import { ToolType } from '../../type/ToolType';

export default function Toolbox() {
  const [toolsData, setToolsData] = useState<ToolType[] | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/tools.json');
        if (!response.ok) throw new Error('Failed to fetch tool data');

        const data: ToolType[] = await response.json();
        setToolsData(data);
      } catch (error) {
        console.error('Error fetching tools:', error);
      }
    };

    fetchTools();
  }, [])

  return (
    <div className='absolute bottom-0 left-0 w-full'>
      <h4 className='tool-title lg:text-[22px] text-[16px] text-center pb-5'>Ma boîte à outils:</h4>
      <div className='grid grid-cols-4 lg:grid-cols-8 w-full'>
        {
          toolsData ? toolsData?.map((tool, index) => (
            <Tool key={index} name={tool.name} color={tool.color} logo={tool.logo} />
          )) : <p>Loading...</p>
        } 
      </div>
    </div>
  )
}