# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Inquizit** is a Next.js 15 application for creating and managing quizzes with OpenAI integration. Built with TypeScript, React 19, Tailwind CSS v4, and shadcn/ui components.

**Project Purpose**: Learning Next.js for job hunting. This is not a production app, though working toward production-grade patterns for learning purposes.

## Feedback Guidelines

When providing code feedback or answering questions about best practices:

### Response Format
- **"Am I following best practices?"** → Answer with yes or no only
- **"Which areas need improvement?"** → List 1-2 issues maximum
- **Never offer solutions** → Point out problems and hint at why they matter, but don't solve them
- **Never redesign** → No refactoring suggestions, architecture overhauls, or "here's how I would build it"

### Focus Areas
- **Understanding gaps** → Highlight issues that show misunderstanding of Next.js, React, or TypeScript concepts
- **Real problems** → Focus on actual issues in the current codebase
- **File structure** → Can point out when files are in obviously wrong locations per Next.js conventions (with brief reasoning)

### Avoid
- Premature optimization for imaginary scale
- Suggesting excessive hooks or abstractions
- Listing 10 problems with urgency ratings
- Solutions, code examples, or step-by-step fixes unless explicitly requested

### No False Positives
- **The question doesn't imply problems exist** → Don't assume "give me feedback" means there are issues to find
- **Be willing to say nothing needed** → "Looks good", "nothing needed", "no issues" are valid answers
- **Use judgment over assumptions** → Assess whether action is actually warranted before suggesting it
- **Truthful "all clear" > forced findings** → Generating problems because asked to look is worse than honest assessment

## Development Commands

### Core Commands

```bash
npm run dev          # Start development server with Turbopack (http://localhost:3000)
npm run build        # Production build with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

## Architecture & Structure

### Directory Structure

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page - renders QuizList and QuizInput
│   ├── layout.tsx           # Root layout with metadata
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── globals.d.ts         # Global TypeScript declarations
│   └── api/chat/route.ts    # OpenAI API endpoint (GET/POST)
├── components/
│   ├── QuizCard.tsx         # Quiz card display (client component)
│   ├── QuizList.tsx         # Quiz list container (client component)
│   ├── QuizInput.tsx        # Quiz creation input (client component)
│   ├── Modal.tsx            # Modal component
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       └── ... (other shadcn components)
└── lib/
    ├── utils.ts             # cn() utility for Tailwind class merging
    └── openAiClientApi.ts  # OpenAI API client wrapper

data.json                     # Static quiz data at project root
```

### Key Architectural Patterns

#### Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Use consistently: `@/components`, `@/lib`, `@/app`

#### Client vs Server Components

- **Client components** (marked with `"use client"`): QuizCard, QuizList, QuizInput, Modal
- **Server components**: page.tsx, layout.tsx
- API routes in `src/app/api/chat/route.ts` handle OpenAI requests

#### Data Flow

1. `QuizInput` captures user prompt
2. Calls `createQuiz()` from `@/lib/openAiClientApi.ts`
3. API route `/api/chat` (POST) sends to OpenAI using `gpt-5` model
4. Response flows back to component via state

#### Styling Stack

- **Tailwind CSS v4** with PostCSS (@tailwindcss/postcss)
- **shadcn/ui** components styled with `class-variance-authority` and `clsx`
- **cn()** utility in `@/lib/utils.ts` for conditional class merging
- Theme system via `next-themes` (configured in components.json)

## OpenAI Integration

### API Configuration

- OpenAI client instantiated in `src/app/api/chat/route.ts`
- Requires `OPENAI_API_KEY` in `.env.local` (gitignored)
- Currently uses `gpt-5` model via `client.responses.create()`

### API Endpoints

```typescript
GET  /api/chat    # Demo endpoint with hardcoded prompt
POST /api/chat    # Accepts { userPrompt: string }, returns OpenAI response
```

## Component Library (shadcn/ui)

### Configuration

- Style: "new-york"
- Base color: slate
- Icon library: lucide-react
- RSC enabled, CSS variables enabled

### Installed Components

- button, card, input, dialog, dropdown-menu, form, label, sonner, tooltip

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

## TypeScript Configuration

- **Target**: ES2017
- **Strict mode**: enabled
- **Module resolution**: bundler
- Path aliases via `@/*`

## ESLint & Formatting

- Extends `next/core-web-vitals` and `next/typescript`
- Prettier integration via `eslint-plugin-prettier`
- Ignores: node_modules, .next, out, build, next-env.d.ts

## Data Management

- Static quiz data stored in `data.json` at project root
- Type: `QuizData = { id: string; name: string }[]`
- Currently no database - data is hardcoded

## Known Issues & TODOs

1. **API inconsistency**: Using `client.responses.create()` - verify if this is the correct OpenAI SDK method
2. **No state persistence**: Quiz data modifications don't persist
3. **Modal state**: QuizList manages modal state globally - consider moving to individual cards
4. **Commented code**: Multiple commented imports in page.tsx suggest work in progress

## Development Workflow

1. **Before starting**: Ensure `.env.local` exists with `OPENAI_API_KEY`
2. **Running the app**: `npm run dev` (Turbopack for fast refresh)
3. **Code quality**: Run `npm run lint` and `npm run format` before commits
4. **Testing**: No test suite currently configured

## External Dependencies

### UI & Styling

- Radix UI primitives (@radix-ui/\*)
- Tailwind CSS v4
- lucide-react for icons

### Forms & Validation

- react-hook-form
- @hookform/resolvers
- zod (v4.1.12)

### AI Integration

- openai (v6.3.0)

### Notifications

- sonner for toast notifications
