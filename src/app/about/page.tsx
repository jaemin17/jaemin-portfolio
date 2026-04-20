import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ maxWidth: 1040, margin: "0 auto", padding: "28px 20px 72px" }}>
        <h1 style={{ fontSize: 34, letterSpacing: "-0.04em" }}>关于我</h1>
        <p style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.8, maxWidth: "78ch" }}>
          这里先放占位文案。建议用 6–10 行讲清楚：你擅长的领域、做过的事情、你在团队中的价值，
          以及你如何使用 AI 工具提升研究/表达/迭代效率（但决策仍以用户价值与可用性为核心）。
        </p>

        <section style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 16, marginBottom: 10 }}>我能提供的能力</h2>
          <ul style={{ paddingLeft: 18, lineHeight: 1.9, maxWidth: "80ch" }}>
            <li>问题定义与目标拆解（把“需求”变成可验证的假设与指标）</li>
            <li>信息架构与关键任务流（复杂流程的取舍与一致性）</li>
            <li>端到端交付（原型、视觉、规范、交付清单、上架素材）</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
          <a className="buttonGhost" href="mailto:you@example.com">
            you@example.com
          </a>
          <Link className="buttonGhost" href="/">
            回到首页
          </Link>
        </div>
      </main>
    </>
  );
}

