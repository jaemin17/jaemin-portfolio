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
    "I’m an independent developer focused on UI/UX and product experience, passionate about solving real problems and creating products that naturally fit into everyday life. Beyond the interface itself, I care about why users stop using products and what makes an experience sustainable in the long term. I’m currently building my own product, Selfly, while continuously exploring a more balanced relationship between design, product thinking, and technology.",
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
    "我是一个专注于 UI/UX 与产品体验的独立开发者，喜欢从真实问题出发，思考产品如何更自然地融入日常。我关注的不只是界面本身，也在意用户为什么会放弃、什么样的体验才能被长期使用。目前正在独立打磨自己的产品 Selfly，并持续探索设计、产品与技术之间更平衡的表达方式。",
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
