'use client'
import { useState } from 'react'

interface ProfileProps {
  name: string;
  role: string;
  stats: { followers: number; following: number; projects: number };
  bio: string;
  image: string;
}

export default function ProfileCard({ name, role, stats, bio, image }: ProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(stats.followers);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(prev => isFollowing ? prev - 1 : prev + 1);
  }

  return (
    <div className="w-[350px] bg-white rounded-3xl shadow-xl overflow-hidden transition-all hover:scale-[1.02]">
      {/* Header Cover */}
      <div className="h-32 bg-gray-100 w-full" />
      
      <div className="relative px-6 pb-8 -mt-16 flex flex-col items-center text-center">
        {/* Avatar - Medidas exatas do print: 146x146, Borda de 4px #A241C2 */}
        <div className="relative w-[146px] h-[146px] rounded-full border-[4px] border-[#A241C2] overflow-hidden bg-[#FFFFFF] shadow-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-6">{role}</p>

        {/* Stats */}
        <div className="flex justify-between w-full px-4 mb-8">
          <div>
            <p className="font-bold text-gray-800">{followerCount}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Seguidores</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">{stats.following}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Seguindo</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">{stats.projects}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Projetos</p>
          </div>
        </div>

        {/* Botões - Medidas fixas: 153x48, Raio 12px */}
        <div className="flex gap-3 w-full mb-6 items-center">
          <button 
            onClick={handleFollow}
            className={`
              /* Layout fixo do Figma */
              w-[153px] h-[48px] rounded-[12px] font-semibold text-white 
              transition-all flex items-center justify-center gap-2 active:scale-95
              
              /* Lógica de Cores e Sombras baseada no estado */
              ${isFollowing 
                ? 'bg-[#10B981] shadow-[0_4px_12px_rgba(16,185,129,0.3)]' 
                : 'bg-gradient-to-b from-[#6975DD] to-[#7354AE] hover:opacity-90'
              }
            `}
          >
            {isFollowing ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Seguindo
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0001 17.5C15.0001 15.7319 14.2977 14.0362 13.0475 12.786C11.7972 11.5358 10.1015 10.8334 8.33341 10.8334C6.5653 10.8334 4.86961 11.5358 3.61937 12.786C2.36913 14.0362 1.66675 15.7319 1.66675 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33341 10.8333C10.6346 10.8333 12.5001 8.96785 12.5001 6.66667C12.5001 4.36548 10.6346 2.5 8.33341 2.5C6.03223 2.5 4.16675 4.36548 4.16675 6.66667C4.16675 8.96785 6.03223 10.8333 8.33341 10.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3333 16.6667C18.3333 13.8584 16.6667 11.25 15 10C15.5478 9.58902 15.9859 9.04928 16.2755 8.4286C16.565 7.80792 16.6971 7.12543 16.66 6.44154C16.6229 5.75765 16.4178 5.09345 16.0629 4.50771C15.7079 3.92197 15.2141 3.43276 14.625 3.08337" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Seguir
              </>
            )}
          </button>
          
          <button className="flex-1 h-[48px] rounded-[12px] border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_230)">
                <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_230">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Mensagem
          </button>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed px-2">
          {bio}
        </p>
      </div>
    </div>
  )
}