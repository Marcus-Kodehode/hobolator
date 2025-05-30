import { useState, useRef, useEffect } from 'react';

const skills = [
  {
    name: 'Lucky',
    description:
      "Some say luck doesn't exist — you prove them wrong. You stumble upon cash, lost donuts, and maybe a rare Pokémon card.",
  },
  {
    name: 'Tough',
    description:
      "You've slept on benches, in dumpsters, and once inside a washing machine — and lived to tell the tale.",
  },
  {
    name: 'Sneaky',
    description:
      "You're the shadow behind the shadow. Risky moves? That's your thing. The cops never see you coming.",
  },
  {
    name: 'Charismatic',
    description:
      "With a smile, a tear, and a clever story, people can't help but give you coins — or at least feel sorry for you.",
  },
];

export default function SkillSelector({ selectedSkill, onSelect }) {
  const [openModal, setOpenModal] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-sm relative">
      <label className="block text-sm font-medium mb-2 text-orange-300">Choose Your Skill</label>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="relative">
            <button
              className={`relative w-full p-2 rounded font-semibold flex justify-between items-center border transition ${
                selectedSkill === skill.name
                  ? 'bg-orange-400 text-black border-orange-500 shadow-md'
                  : 'bg-zinc-800 text-white border-zinc-600 hover:bg-zinc-700'
              }`}
              onClick={() => onSelect(skill.name)}
            >
              {skill.name}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Hindrer at valg aktiveres
                  setOpenModal(skill.name);
                }}
                className="text-orange-300 hover:text-orange-400 ml-2 cursor-pointer text-lg"
                title={`More about ${skill.name}`}
              >
                ?
              </span>
            </button>

            {/* MODAL */}
            {openModal === skill.name && (
              <div
                ref={modalRef}
                className="absolute z-30 left-full ml-2 top-0 w-64 bg-zinc-900 bg-opacity-95 backdrop-blur-sm text-orange-100 text-sm p-4 rounded shadow-lg border border-orange-500 before:content-[''] before:absolute before:left-[-8px] before:top-3 before:border-y-8 before:border-r-8 before:border-l-0 before:border-transparent before:border-r-orange-500"
              >
                <div className="flex justify-between items-center mb-2">
                  <strong>{skill.name}</strong>
                  <button
                    className="text-sm text-orange-300 hover:text-orange-400"
                    onClick={() => setOpenModal(null)}
                  >
                    ❌
                  </button>
                </div>
                <p>{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
