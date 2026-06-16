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
  label: "我是嘉敏",
  heroTitle: "Hello 👋",
  introBio:
    "我是一个喜欢从真实问题出发做产品的 UI/UX 设计师。\n\n我喜欢先把东西做出来，在真实体验中寻找答案。我喜欢尝试不同的解决方案。每次设计对我来说，都是一次重新理解用户和产品的过程。\n\n我希望做出的产品让人感到自然和舒服。 除了界面设计，我也会参与产品开发和上线流程。我喜欢和别人讨论想法，把不同视角融入到产品中。\n\n在日常生活中，我喜欢亲手制作喜欢的东西、探索不同材质，把脑海中的想法一点点变成真实的作品。",
  introCtaPrefix: "想了解更多关于我的经历？",
  pdfLinkLabel: "这份 PDF 也许会更完整 ✰",
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
