import { TestPasswordGate } from "./TestPasswordGate";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return <TestPasswordGate>{children}</TestPasswordGate>;
}
