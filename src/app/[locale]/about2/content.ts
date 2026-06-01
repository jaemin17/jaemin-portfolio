import type { Locale } from "@/i18n/config";
import { resumeDownloadUrl } from "@/content/resume";

/**
 * Copy aligned with https://jaemins-sublime-site.webflow.io/about
 * (navigation labels are defined separately in SiteHeader.)
 */
export const about2PdfUrl = resumeDownloadUrl;

export const about2Email = "lijaemin1993@gmail.com";

const about2CopyEn = {
  label: "Hey there!",
  heroTitle: "Who am I？",
  introBio:
    "I’m an independent developer focused on UI/UX and product experience, creating products that naturally fit into everyday life through real problem-solving. Beyond the interface itself, I care about building experiences people can continue using over time. I’m currently building my own product, Selfly, while exploring a more balanced relationship between design, product thinking, and technology.",
  introCtaPrefix: "Looking for a more detailed self intro?",
  pdfLinkLabel: "Maybe this PDF will do ✰",
  skillsLeft: [
    "Product Design",
    "UI / UX Design",
    "Interaction Design",
  ],
  skillsRight: [
    "Design Systems",
    "Web & App Design",
    "Visual Design",
  ],
  superpowers: [
    {
      title: "Long-term perspective",
      description:
        "I care more about why a product can keep being used, rather than just briefly attracting users.",
    },
    {
      title: "Simplify complexity",
      description:
        "I like organizing messy information and ideas, turning complex problems into clear and natural experiences.",
    },
    {
      title: "Self-driven execution",
      description:
        "I enjoy shaping products from zero and continuously iterating until they truly go live.",
    },
  ],
  jobs: [
    {
      company: "Xiyiweireality",
      role: "Product Experience Designer",
      period: "2023 – 2025",
    },
    {
      company: "KMAX-ShenZhen",
      role: "UI/UX Designer",
      period: "2019 – 2023",
    },
    {
      company: "VIA-Guangzhou",
      role: "UI Designer",
      period: "2017 – 2019",
    },
    {
      company: "ISAR-Beijing",
      role: "Visual and UX Designer",
      period: "2016 – 2017",
    },
  ],
  sectionWhatIDo: "What I do",
  sectionSuperpower: "What I’m good at",
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
    "我是一个专注于 UI/UX 与长期产品体验的独立开发者，习惯从真实感受与日常问题出发，设计更自然、低压力的使用体验。我关注的不只是界面本身，也在意什么样的产品能够真正长期陪伴用户。目前正在独立打磨自我记录产品 Selfly，并持续探索设计、产品与技术之间更平衡的表达方式。",
  introCtaPrefix: "想了解更详细的自我介绍？",
  pdfLinkLabel: "也许这份 PDF 能帮到你 ✰",
  skillsLeft: ["产品体验设计", "UI / UX 设计", "交互与产品结构"],
  skillsRight: ["设计系统搭建", "Web & App Design", "视觉与创意表达"],
  superpowers: [
    {
      title: "长期视角",
      description: "我更关注产品为什么能被持续使用，而不只是短暂吸引用户。",
    },
    {
      title: "简化复杂",
      description: "我喜欢整理混乱的信息与想法，把复杂的问题变成清晰自然的体验。",
    },
    {
      title: "自驱落地",
      description: "我享受从 0 开始打磨产品，并持续迭代直到真正上线。",
    },
  ],
  jobs: [
    {
      company: "深圳希夷微象科技",
      role: "产品体验设计师",
      period: "2023 – 2025",
    },
    {
      company: "KMAX 科骏-深圳",
      role: "产品体验设计师",
      period: "2019 – 2023",
    },
    {
      company: "VIA 广州威纳",
      role: "UI 设计师",
      period: "2017 – 2019",
    },
    {
      company: "ISAR 伊飒尔-广州",
      role: "UIUE 实验室设计师",
      period: "2016 – 2017",
    },
  ],
  sectionWhatIDo: "我做什么",
  sectionSuperpower: "我擅长",
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
