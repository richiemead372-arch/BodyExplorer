/**
 * Curated exercise-education content keyed to canonical muscle names.
 * Keep this separate from the 3D mesh data so additional muscle guides can be
 * added without changing model loading or mesh identification.
 */

const PECTORALIS_MAJOR_GUIDE = {
  scopeNote:
    'This guide covers the whole pectoralis major. The highlighted mesh is the named subdivision shown above.',
  function:
    'Adducts and horizontally adducts the arm and contributes to medial rotation at the shoulder. The clavicular fibers assist shoulder flexion; lower fibers can assist extending the arm from a flexed position.',
  subdivisions: [
    {
      name: 'Clavicular part',
      attachments: 'Medial clavicle to the humerus.',
      role: 'Assists shoulder flexion and horizontal adduction.',
    },
    {
      name: 'Sternocostal part',
      attachments: 'Sternum and upper costal cartilages to the humerus.',
      role: 'Contributes strongly to arm adduction and horizontal adduction; lower fibers can assist extension from a flexed position.',
    },
    {
      name: 'Abdominal part',
      attachments: 'Aponeurosis of the external oblique/anterior abdominal wall to the humerus.',
      role: 'Contributes to adduction and can assist bringing a flexed arm down and across the body.',
    },
  ],
  exercises: [
    {
      name: 'Flat bench press',
      emphasis:
        'Trains the whole pectoralis major, with relatively more sternocostal-region activity than an incline press. The triceps and anterior deltoid also contribute; this is not an isolation exercise.',
      technique:
        'Set a stable base with feet planted. Lower the bar under control to a comfortable chest position with wrists over elbows, then press without bouncing. Use a shoulder position and range that remain comfortable.',
    },
    {
      name: 'Moderate-incline dumbbell press',
      emphasis:
        'The incline increases the shoulder-flexion demand and can bias work toward the clavicular region. Regional emphasis is relative, not isolation; the anterior deltoid and triceps assist.',
      technique:
        'Set the bench to a moderate incline. Lower dumbbells under control to a comfortable depth, keeping forearms close to vertical near the bottom, then press up and slightly inward without letting the shoulders roll forward.',
    },
    {
      name: 'Cable chest fly',
      emphasis:
        'Loads the pectoralis major through horizontal adduction. The cable path changes the line of pull, but should not be treated as a way to isolate one subdivision.',
      technique:
        'Keep a soft bend in the elbows and a steady torso. Bring the upper arms together in front of the chest, then return slowly until you feel a comfortable stretch; avoid forcing the arm far behind the body.',
    },
  ],
  hypertrophy: [
    'Progressively train through a comfortable range and add repetitions, load, or sets over time when recovery and technique remain good.',
    'The 2026 ACSM evidence overview found greater hypertrophy with higher weekly volumes, including 10 or more sets per muscle per week. Treat that as a broad evidence-informed reference—not a mandatory minimum or a guaranteed optimum—and build up gradually.',
    'Use challenging sets with controlled technique. Evidence suggests hypertrophy may improve as sets finish closer to failure, but the exact target is uncertain; reaching momentary failure on every set is not required.',
    'Spread work across sessions if it helps maintain set quality and recover between workouts. Adjust volume to training experience, schedule, and recovery.',
  ],
  caveat:
    'These are general education notes, not an individualized training or medical plan. Stop if an exercise causes sharp pain and seek qualified guidance for an injury or persistent symptoms.',
  references: [
    {
      label: 'ACSM 2026 Position Stand: resistance training and hypertrophy',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/',
      note: 'Overview of 137 systematic reviews on resistance-training prescriptions in healthy adults.',
    },
    {
      label: 'Chaves et al. (2020): horizontal vs. incline bench press',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7449336/',
      note: 'Eight-week study in untrained young men; regional results were limited and should not be read as proof that one angle isolates a muscle region.',
    },
    {
      label: 'Refalo et al. (2024): proximity to failure and hypertrophy',
      url: 'https://pubmed.ncbi.nlm.nih.gov/38970765/',
      note: 'Exploratory meta-regression; the authors caution that the exact repetitions-in-reserve relationship remains unclear.',
    },
  ],
};

/**
 * Return a parent-muscle guide for mesh names that describe a subdivision,
 * side, or duplicated mesh. Other muscles keep their existing info panel until
 * an education guide is added for them.
 */
export function getMuscleEducation(meshName) {
  const normalizedName = String(meshName || '')
    .toLowerCase()
    .replace(/_/g, ' ');

  if (/\bpectoralis major\b/.test(normalizedName)) {
    return PECTORALIS_MAJOR_GUIDE;
  }

  return null;
}
