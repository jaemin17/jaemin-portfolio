import type { Locale } from "@/i18n/config";

/**
 * Copy aligned with https://jaemins-sublime-site.webflow.io/about
 * (navigation labels are defined separately in SiteHeader.)
 */
export const about2PdfUrl =
  "https://drive.google.com/file/d/1QowvXwQdM2GcpHMw60DGumxEhw75aBfT/view?usp=sharing";

export const about2Email = "lijaemin1993@gmail.com";

const about2CopyEn = {
  label: "Hey there!",
  heroTitle: "Who am I？",
  introBio:
    "I'm a User Experience Product Designer based in Hangzhou. I focus on blending technology and aesthetics to create intuitive and appealing user interfaces. In this dynamic city, I draw constant inspiration, eager to bring unique design solutions to your projects, I like to build for the web and make things pretty.",
  introCtaPrefix: "Looking for a more detailed self intro?",
  pdfLinkLabel: "Maybe this PDF will do ✰",
  skillsLeft: [
    "User Experience",
    "UI\u00a0Design",
    "Graphic Design",
    "Prototyping",
  ],
  skillsRight: [
    "Systems Thinking",
    "Creative Thinking",
    "Design System Development",
  ],
  superpowers: [
    {
      title: "Take initiative",
      description:
        "I love taking the lead, sharing well-prepared proposals to inspire and get everyone on board with exciting ideas.",
    },
    {
      title: "Navigate ambiguity",
      description:
        "I enjoy bringing people together by using clear communication to find common goals, especially when things are a bit uncertain.",
    },
    {
      title: "Exhibit adaptability",
      description:
        "I get a kick out of exploring different sides of myself when tackling various challenges and adapting to new environments.",
    },
  ],
  jobs: [
    {
      company: "KMAX-ShenZhen",
      role: "UI/UX Designer",
    },
    {
      company: "VIA-Guangzhou",
      role: "UI Designer",
    },
    {
      company: "ISAR-Beijing",
      role: "Visual and UX Designer",
    },
  ],
  sectionWhatIDo: "What I do",
  sectionSuperpower: "Superpower",
  sectionExperience: "My experience",
  experienceSummary:
    "I've designed products for China Mobile, Haier, Desay SV Automotive, and General Electric Appliances. I also led VR education platform and software design.",
  footerTitle: "I'd love to meet you :) ✰. ",
  footerEmailLabel: "→ Email",
} as const;

const about2CopyZh = {
  label: "你好！",
  heroTitle: "我是谁？",
  introBio:
    "我是常驻杭州的用户体验产品设计师，专注融合技术与美学，打造直观且富有吸引力的界面。在这座充满活力的城市里，我不断汲取灵感，渴望为你的项目带来独特的设计方案。我喜欢做 Web 相关的设计，也热衷于把东西做得漂亮。",
  introCtaPrefix: "想了解更详细的自我介绍？",
  pdfLinkLabel: "也许这份 PDF 能帮到你 ✰",
  skillsLeft: ["用户体验", "UI\u00a0设计", "平面设计", "原型设计"],
  skillsRight: ["系统思维", "创意思维", "设计系统搭建"],
  superpowers: [
    {
      title: "主动推进",
      description:
        "我喜欢主动牵头，用充分准备的方案激发团队共鸣，让大家认同并投入令人兴奋的想法。",
    },
    {
      title: "驾驭模糊",
      description:
        "我善于用清晰的沟通凝聚共识、找到共同目标，尤其在方向尚不明确的阶段。",
    },
    {
      title: "快速适应",
      description:
        "面对不同挑战和新环境时，我喜欢探索自己的多种可能性，并从中获得成长的动力。",
    },
  ],
  jobs: [
    {
      company: "KMAX-ShenZhen",
      role: "UI/UX 设计师",
    },
    {
      company: "VIA-Guangzhou",
      role: "UI 设计师",
    },
    {
      company: "ISAR-Beijing",
      role: "视觉与 UX 设计师",
    },
  ],
  sectionWhatIDo: "我做什么",
  sectionSuperpower: "超能力",
  sectionExperience: "工作经历",
  experienceSummary:
    "我曾为中国移动、海尔、德赛西威、通用电气家电等品牌设计产品，也主导过 VR 教育平台与软件设计。",
  footerTitle: "很高兴认识你 :) ✰. ",
  footerEmailLabel: "→ 邮件",
} as const;

export const about2CopyByLocale = {
  en: about2CopyEn,
  zh: about2CopyZh,
} as const;

export function getAbout2Copy(locale: Locale) {
  return about2CopyByLocale[locale];
}
