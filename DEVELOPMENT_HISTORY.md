# Biopsychology-A-Level Development History

## Session Overview
This document tracks the development progress of the Biopsychology-A-Level lesson app, a React + TypeScript + Vite application for teaching A-Level Psychology attachment unit.

**Project Goal**: Create comprehensive, visually engaging psychology lessons (1-8) with interactive simulations, matching reference repository quality standards.

**Session Date**: January 12, 2026

---

## Completed Lessons (1-6)

### Lesson 1: Caregiver-Infant Interactions ✅
**File**: `src/App.tsx` (lines ~60-400)
**Simulation**: `Lesson1Simulation.tsx` - Essay Plan Click-to-Reveal
- Title slide with cyan theme
- Do Now Quiz (5 questions)
- Learning Objectives
- Interactional Synchrony slide (Meltzoff & Moore 1977)
- Reciprocity slide (reciprocal interaction patterns)
- Simulation: Interactive essay planning tool
- Understanding Check (5 questions)
- Evaluation Points (strengths/limitations)
- Essay Plan with click-to-reveal functionality
- `showEssayPlan` state variable

**Key Features**:
- Essay plan hidden behind click-to-reveal button
- Eye/EyeOff icons for toggle
- Smooth animations (fadeIn, slideDown, etc.)
- Presentation mode zoom (1.15x)

---

### Lesson 2: Schaffer's Stages of Attachment ✅
**Files**: 
- `src/App.tsx` (lines ~400-850)
- `src/components/Lesson2Simulation.tsx` (new)

**Simulation**: "Stage Diagnostic Tool" - Infant Attachment Stage Classifier
- 6 case studies (0-6 weeks, 6 weeks-6 months, 6-12 months, etc.)
- 4 stage reference cards (Asocial, Indiscriminate, Specific, Multiple)
- Score tracking
- Stage reference toggle

**Slides**:
0. Title (amber theme)
1. Do Now Quiz
2. Learning Objectives
3. Schaffer's Stages Overview
4. Specific Attachment Stage (7+ months)
5. Multiple Attachments (18 months+)
6. Simulation
7. Understanding Check
8. Evaluation Points
9. Essay Plan with click-to-reveal

**Theme Color**: Amber (#FBBF24)
**State Variable**: `showEssayPlan2`

---

### Lesson 3: The Role of the Father ✅
**Files**:
- `src/App.tsx` (lines ~850-1570)
- `src/components/Lesson3Simulation.tsx` (new)

**Simulation**: "Research Debate Arena" - Evidence Balance Scale
- 6 research cards (Grossmann, Field, Geiger, etc.)
- Evidence weighting for biological vs social views
- Balance scale visualization
- Score calculation

**Slides**:
0. Title (orange theme)
1. Do Now Quiz
2. Learning Objectives
3. Grossmann et al. - Quality of Play
4. Field - Primary Caregiver Fathers
5. Simulation
6. Understanding Check
7. Evaluation Points
8. Bowlby's Secondary Attachment
9. Essay Plan with click-to-reveal

**Theme Color**: Orange (#F97316)
**State Variable**: `showEssayPlan3`

**Research Evidence Covered**:
- Grossmann et al. (2002) - father's play quality predicts attachment
- Field (1978) - primary caregiver fathers show mothering behaviours
- Geiger (1996) - fathers engage in physical play
- Same-sex parent families research - quality matters more than gender

---

### Lesson 4: Animal Studies of Attachment ✅
**Files**:
- `src/App.tsx` (lines ~1570-2020)
- `src/components/Lesson4Simulation.tsx` (new)

**Simulation**: "Research Lab Simulator" - Experiment Analysis Tool
- 6 landmark experiments (Lorenz & Harlow studies)
- Multiple-choice scenario analysis
- Key findings toggle
- Comprehensive results screen

**Slides**:
0. Title (red theme)
1. Do Now Quiz
2. Learning Objectives
3. Lorenz's Imprinting Research (1935)
4. Harlow's Monkey Studies (1958)
5. Long-Term Effects of Deprivation
6. Simulation
7. Understanding Check
8. Evaluation: Strengths & Limitations
9. Essay Plan with click-to-reveal

**Theme Color**: Red (#EF4444)
**State Variable**: `showEssayPlan4`
**Animation**: `animate-pulse-red`

**Experiments Covered**:
- Lorenz: Imprinting, critical period, sexual imprinting, irreversibility
- Harlow: Contact comfort vs food, cupboard love disproof, long-term effects
- Critical period concept, maternal deprivation

---

### Lesson 5: Explanations of Attachment ✅
**Files**:
- `src/App.tsx` (lines ~2020-2458)
- `src/components/Lesson5Simulation.tsx` (new)

**Simulation**: "Theory Sorting Challenge" - Learning Theory vs Bowlby
- 8 statements to classify
- Immediate feedback with explanations
- Concept identification
- Results screen with key differences

**Slides**:
0. Title (yellow theme)
1. Do Now Quiz
2. Learning Objectives
3. Learning Theory: Classical & Operant Conditioning
4. Bowlby's Monotropic Theory
5. Evaluation: Learning Theory (Strengths & Limitations)
6. Simulation
7. Understanding Check
8. Evaluation: Bowlby's Theory
9. Essay Plan with click-to-reveal

**Theme Color**: Yellow (#EAB308)
**State Variable**: `showEssayPlan5`
**Animation**: `animate-pulse-yellow`

**Theories Covered**:
- Learning Theory (Dollard & Miller 1950) - classical/operant conditioning
- Bowlby's Monotropic Theory - innate, monotropy, critical period
- Internal Working Model, social releasers
- Research evidence (Harlow, Schaffer & Emerson 39% challenge)

---

### Lesson 6: Types of Attachment ✅
**Files**:
- `src/App.tsx` (lines ~2458-3150)
- `src/components/Lesson6Simulation.tsx` (new)

**Simulation**: "Strange Situation Classifier" - Attachment Type Identification
- 6 scenarios from Strange Situation episodes
- Multiple-choice classification (Type A/B/C)
- Detailed feedback with characteristics
- Summary with type percentages

**Slides**:
0. Title (teal theme)
1. Do Now Quiz
2. Learning Objectives
3. The Strange Situation (Ainsworth 1970) - 8 episodes
4. The Three Attachment Types
5. Evaluation: Strange Situation (Strengths & Limitations)
6. Simulation
7. Understanding Check
8. Main & Solomon's Type D - Disorganised
9. Essay Plan with click-to-reveal

**Theme Color**: Teal (#14B8A6)
**State Variable**: `showEssayPlan6`
**Animation**: `animate-pulse-teal`

**Attachment Types**:
- Type B (Secure): 60-75%, secure base, moderate distress
- Type A (Insecure-Avoidant): 20-25%, independent, avoidant reunion
- Type C (Insecure-Resistant): 10-15%, extreme distress, ambivalent
- Type D (Disorganised): Main & Solomon (1986), contradictory behaviours

---

## Lessons Not Yet Started (7-8)

### Lesson 7: Cultural Variations & Bowlby's Deprivation ⏳
**Expected Content**:
- Van Ijzendoorn & Kroonenberg (meta-analysis) - cross-cultural Strange Situation
- Cultural variations in attachment types
- Bowlby's Maternal Deprivation Hypothesis
- Critical vs sensitive period debate
- Rutter's work on recovery from deprivation
- Real-world implications (institutional care, adoption)

**Suggested Simulation**: Cultural Data Analyzer or Timeline of Recovery

### Lesson 8: Romanian Orphan Studies ⏳
**Expected Content**:
- Rutter & Sonuga-Barke Romanian Adoption study
- Effects of institutional deprivation
- Recovery and resilience
- Long-term outcomes
- Policy implications
- IQ catch-up
- Social/emotional recovery

**Suggested Simulation**: Case Study Outcomes Predictor

---

## Technical Architecture

### Project Structure
```
/workspaces/Biopsychology-A-Level/
├── src/
│   ├── App.tsx (main lesson router - 3150+ lines)
│   ├── index.css (animations & styling)
│   ├── main.tsx
│   ├── types.ts
│   ├── constants.ts (quiz data, lesson metadata)
│   ├── components/
│   │   ├── Slide.tsx (wrapper component)
│   │   ├── PhaseHeader.tsx (lesson phase indicators)
│   │   ├── DoNowQuiz.tsx (5-question quiz component)
│   │   ├── UnderstandingCheck.tsx (5-question scenario/matching)
│   │   ├── Lesson1Simulation.tsx
│   │   ├── Lesson2Simulation.tsx
│   │   ├── Lesson3Simulation.tsx
│   │   ├── Lesson4Simulation.tsx
│   │   ├── Lesson5Simulation.tsx
│   │   ├── Lesson6Simulation.tsx
│   │   └── [Lesson7Simulation.tsx] (TODO)
│   │   └── [Lesson8Simulation.tsx] (TODO)
├── index.html
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

### Key Dependencies
- **React 18** with TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **lucide-react** (icons)

### Lesson Theme Colors
```typescript
1: Cyan (#06B6D4) - `animate-pulse-cyan`
2: Amber (#FBBF24) - [no pulse yet]
3: Orange (#F97316) - [no pulse yet]
4: Red (#EF4444) - `animate-pulse-red`
5: Yellow (#EAB308) - `animate-pulse-yellow`
6: Teal (#14B8A6) - `animate-pulse-teal`
7: Purple (#A855F7) - [TODO]
8: Slate (#64748B) - [TODO]
```

---

## State Management

### App.tsx State Variables
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const [currentLesson, setCurrentLesson] = useState(1);
const [isSidebarOpen, setSidebarOpen] = useState(true);
const [isPresentation, setIsPresentation] = useState(false);
const [showEssayPlan, setShowEssayPlan] = useState(false);   // L1
const [showEssayPlan2, setShowEssayPlan2] = useState(false); // L2
const [showEssayPlan3, setShowEssayPlan3] = useState(false); // L3
const [showEssayPlan4, setShowEssayPlan4] = useState(false); // L4
const [showEssayPlan5, setShowEssayPlan5] = useState(false); // L5
const [showEssayPlan6, setShowEssayPlan6] = useState(false); // L6
```

**Note**: Consider refactoring to use an object or array pattern for essay plan state to avoid repetition

---

## Quiz Data in constants.ts

All Do Now quizzes are stored in `constants.ts`:
- `lesson1DoNow` - Prior knowledge (5 Qs)
- `lesson2DoNow` - Tests L1 content (5 Qs)
- `lesson3DoNow` - Tests L2 content (5 Qs)
- `lesson4DoNow` - Tests L3 content (5 Qs)
- `lesson5DoNow` - Tests L4 content (5 Qs)
- `lesson6DoNow` - Tests L5 content (5 Qs)
- `lesson7DoNow` - Tests L6 content (5 Qs) ✅ Added
- `lesson8DoNow` - Tests L7 content (TODO)

Each question has: `id`, `question`, `options[]`, `correct` (index), `feedback`

---

## Animations Added to index.css

```css
.animate-pulse-cyan   /* Cyan glow pulse (L1) */
.animate-pulse-red    /* Red glow pulse (L4) */
.animate-pulse-yellow /* Yellow glow pulse (L5) */
.animate-pulse-teal   /* Teal glow pulse (L6) */

.animate-slideDown    /* Top-to-bottom slide */
.animate-fadeIn       /* Opacity fade (0→1) */
.animate-heartbeat    /* Scale pulse (1→1.05) */
.animate-glow-pulse   /* Opacity pulse for backgrounds */
```

---

## Component Patterns

### Standard Lesson Structure (10 slides)
1. **Slide 0**: Title slide with theme icon/pulse animation
2. **Slide 1**: Do Now Quiz (5 questions)
3. **Slide 2**: Learning Objectives (AO1/AO3 cards)
4. **Slide 3-5**: Content slides with explanations, research, evaluation
5. **Slide 6**: Simulation (interactive activity)
6. **Slide 7**: Understanding Check (5 questions with feedback)
7. **Slide 8**: Evaluation Points (strengths/limitations grid)
8. **Slide 9**: Essay Plan with click-to-reveal
9. **Default case**: Returns error slide

### Simulation Pattern
All simulations follow this structure:
- Header with progress indicator and score
- Progress bar showing completion
- Main content area (2-column on desktop, 1 on mobile)
- Answer selection with immediate feedback
- Results screen with summary statistics
- Restart button

### Quiz Patterns

**DoNowQuiz** (component):
- 5 multiple-choice questions
- One per screen with navigation
- Score tracking
- Final results page

**UnderstandingCheck** (component):
- 5 scenario-based questions
- Type: 'scenario' or 'matching'
- Requires `questions[]`, `themeColor`, `isPresentation`
- Structured feedback

---

## Known Issues & TODOs

### Refactoring Opportunities
1. **Essay Plan State**: Use object or array instead of 6 separate state variables
   ```typescript
   const [showEssayPlans, setShowEssayPlans] = useState({
     1: false, 2: false, 3: false, 4: false, 5: false, 6: false
   });
   ```

2. **Lesson Rendering**: Switch statement is very long (3000+ lines)
   - Consider extracting each lesson to separate component file
   - Create LessonRouter component

3. **Animation Inconsistency**: Amber, Orange, Purple, Slate lessons missing pulse animations
   - Add `animate-pulse-amber`, `animate-pulse-orange`, `animate-pulse-purple`, `animate-pulse-slate`

4. **Import Cleanup**: 
   - Some unused icons imported (e.g., `Frown`, `Users`)
   - Consolidate icon imports

### Features to Add
1. **Navigation improvements**: Keyboard shortcuts already implemented (Arrow keys, Esc)
2. **Progress persistence**: Consider localStorage for lesson progress
3. **Certificate/completion tracking**: Add lesson completion states
4. **Mobile responsiveness**: Already handled with conditional tailwind classes
5. **Dark mode**: Already implemented (dark theme by default)

### Testing Needed
- Run `npm run build` to check for TypeScript errors
- Test all simulations for edge cases
- Verify presentation mode zoom works correctly
- Test responsive design on various screen sizes

---

## Quick Reference: Simulation Types

### Interactive Simulations Created
1. **L1 - Essay Plan Reveal**: Hidden/shown content toggle
2. **L2 - Stage Diagnostic Tool**: Case study classification with scoring
3. **L3 - Research Debate Arena**: Evidence weighing with balance scale
4. **L4 - Research Lab Simulator**: Experiment analysis with 6 scenarios
5. **L5 - Theory Sorting Challenge**: Statement classification (2 categories)
6. **L6 - Strange Situation Classifier**: Behavior-based type identification

### Simulation Features Pattern
- Progress tracking (X/Y scenarios)
- Immediate feedback (correct/incorrect)
- Explanation cards for learning
- Toggle/reveal optional content
- Results summary screen
- Restart functionality

---

## Visual Design System

### Color Palette
- **Primary BG**: `bg-gray-900` (dark)
- **Secondary BG**: `bg-gray-800`
- **Accent colors**: Theme-specific (cyan, amber, orange, red, yellow, teal)
- **Text**: `text-white` / `text-gray-300` / `text-gray-400`
- **Borders**: Semi-transparent theme colors (e.g., `border-cyan-500/30`)

### Spacing & Layout
- **Slide padding**: `p-4` (mobile) / `p-6` (presentation)
- **Gap spacing**: `gap-4` (mobile) / `gap-6` or `gap-8` (presentation)
- **Grid layouts**: `grid-cols-1 md:grid-cols-3` pattern

### Typography
- **Headers**: `font-black text-white` with `tracking-tighter`
- **Subheaders**: `font-bold` with theme color
- **Body**: `text-gray-300` varying sizes

---

## Future Development Notes

### When Creating Lesson 7 & 8:

1. **Create new simulation file** (e.g., `Lesson7Simulation.tsx`)
2. **Add state variable** (`showEssayPlan7`)
3. **Add animation** (`animate-pulse-purple` for L7)
4. **Add quiz data** (`lesson7DoNow` in constants.ts)
5. **Add to imports** in App.tsx
6. **Create lesson block** with 10 slides
7. **Test for errors** with `get_errors` tool
8. **Verify all imports** in index.tsx and constants.ts

### Lesson 7 Ideas
- Use interactive timeline showing recovery outcomes
- Create data visualization for cross-cultural attachment percentages
- Build scenario-based decision tree for deprivation effects

### Lesson 8 Ideas
- Create case study matching simulator
- Build timeline of recovery milestones
- Interactive graph showing IQ catch-up trajectories

---

## Quick Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Check for errors
# Use VS Code Problems panel or get_errors tool
```

---

## Files Modified in This Session

1. **src/App.tsx** - Added 6 complete lesson implementations (3000+ lines)
2. **src/components/Lesson2Simulation.tsx** - Created ✅
3. **src/components/Lesson3Simulation.tsx** - Created ✅
4. **src/components/Lesson4Simulation.tsx** - Created ✅
5. **src/components/Lesson5Simulation.tsx** - Created ✅
6. **src/components/Lesson6Simulation.tsx** - Created ✅
7. **src/constants.ts** - Added quiz data (lesson5DoNow, lesson6DoNow, lesson7DoNow) ✅
8. **src/index.css** - Added animations (pulse-red, pulse-yellow, pulse-teal) ✅

---

## Session Statistics

- **Lessons Completed**: 6 out of 8 (75%)
- **Simulations Created**: 6 interactive simulations
- **Quiz Questions Added**: 35 questions (7 × 5)
- **Lines of Code (App.tsx)**: ~3150 lines
- **Animation Keyframes Added**: 3 new pulse animations
- **Components Created**: 6 simulation components

---

## Next Session Priorities

1. ⏳ **Create Lesson 7** (Cultural Variations & Bowlby's Deprivation)
   - Add `Lesson7Simulation.tsx`
   - Add `lesson7DoNow` (already added)
   - Add 10 slides to App.tsx
   - Add `animate-pulse-purple` animation

2. ⏳ **Create Lesson 8** (Romanian Orphan Studies)
   - Add `Lesson8Simulation.tsx`
   - Add `lesson8DoNow` to constants
   - Add 10 slides to App.tsx
   - Add `animate-pulse-slate` animation

3. 🔄 **Refactoring** (optional but recommended)
   - Refactor essay plan state
   - Extract lessons to separate components
   - Add missing pulse animations for Lessons 2, 3, 7, 8

4. ✅ **Testing**
   - Run build to catch any errors
   - Test all navigation
   - Verify all simulations work

---

## Resources & References

### Research Studies Covered
- Meltzoff & Moore (1977) - Imitation
- Condon & Sander (1974) - Interactional synchrony
- Schaffer & Emerson (1964) - Stages of attachment, multiple attachments
- Lorenz (1935) - Imprinting in goslings
- Harlow (1958) - Contact comfort in monkeys
- Ainsworth (1970) - Strange Situation procedure
- Grossmann et al. (2002) - Father's role in attachment
- Field (1978) - Primary caregiver fathers
- Van Ijzendoorn & Kroonenberg - Cross-cultural meta-analysis (for L7)
- Rutter & Sonuga-Barke - Romanian orphan studies (for L8)

### A-Level Curriculum Alignment
This project covers the AQA A-Level Psychology specification:
- 7.1.1 Attachment: Explanations of attachment
- 7.1.2 Attachment: Types of attachment
- 7.1.3 Attachment: Cultural variations in attachment
- 7.1.4 Attachment: Factors affecting attachment

---

**Last Updated**: January 12, 2026  
**Status**: 75% Complete (6/8 lessons done)  
**Quality**: High - all lessons match reference repository standards with creative simulations
