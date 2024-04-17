'use client';
import { analyze_data } from '@/utils/a';
export default function Home() {
  return (
    <div>
      <div>
        <button
          onClick={(event) => {
            event?.preventDefault();
            analyze_data();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
