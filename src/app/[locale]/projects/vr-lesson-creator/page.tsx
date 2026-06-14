import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import "./webflow.css";

type Props = {
  params: Promise<{ locale: string }>;
};

type ImageAsset = {
  src: string;
  alt: string;
};

type Card = ImageAsset & {
  title?: string;
  text: string;
};

type Concept = ImageAsset & {
  label: string;
  headline: string;
};

type PageCopy = {
  subtitle: string;
  overviewLabel: ReactNode;
  overviewHeadline: string;
  overviewBody: string;
  roleLabel: string;
  roleBody: string;
  achievementLabel: string;
  achievementBody: string;
  researchLabel: string;
  researchHeadline: ReactNode;
  researchBody: string;
  insightLabel: string;
  insightHeadline: ReactNode;
  insightBody: ReactNode;
  insightCards: Card[];
  competitiveLabel: string;
  competitiveHeadline: string;
  competitiveBody: string;
  competitorCards: Card[];
  goalsLabel: string;
  goals: string[];
  concepts: Concept[];
  challenge: string;
  refinements: Concept[];
  contactTitle: string;
  contactBody: string;
};

const coverImage =
  "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b4c9280432b999012c10f_VR%E8%AF%BE%E5%88%9B.png";

const images = {
  overview:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/6551b1760552bd6dfcce9e4b_Frame%2048.png",
  insight1:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/65548b81fd4185156a2a421b_Group%20153.png",
  insight2:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/65548b87c1bd04377cf408c8_Group%20154.png",
  insight3:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/65548b8c477b93838ab0251a_Group%20155.png",
  competitor1:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/654cb02b56c2d7406bf3e18b_Rectangle%20100%20(1).png",
  competitor2:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/654cb37b585518daac07673c_%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90%E9%85%8D%E5%9B%BE2.png",
  competitor3:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/654cb38114d6ce86459eac62_%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90%E9%85%8D%E5%9B%BE3.png",
  goalsIcon:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b20671f17199893e41d4a_Artboard%2045%201.svg",
  goalsLine:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b0e0e056f1bc1833f7557_Vector%2094.png",
  contentCreation:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/65549fed74025a4d1b258be5_Untitled.gif",
  onlineResources:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/6548b0682e324d51c9cb4472_Frame%2041%20(2).png",
  modelEditing:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b043f55c5599d1d861257_Frame%2043%20(1).png",
  vrTools:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b04fbe72d5ddde0156aea_Frame%2044%20(1).png",
  challenge:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b093e2e4725cfe693e237_image%2016.png",
  challengeLine:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b0a1ef6a690ed41633ecf_Vector%2093.svg",
  library:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b2ff3d628c3fb6469901d_Frame%2053%20(1).png",
  editingExperience:
    "https://cdn.prod.website-files.com/63d74cd8746a185b1d64f96c/655b2b507a61b9c478c34d2f_Frame%2049%20(1)%20(1).png",
};

const copy: Record<Locale, PageCopy> = {
  en: {
    subtitle: "User Experience Design",
    overviewLabel: (
      <>
        PROJECT <em>OVERVIEW</em>
      </>
    ),
    overviewHeadline:
      "Simplify lesson planning for teachers, vividly present key concepts",
    overviewBody:
      "With the proliferation of emerging technologies, we explore integrating interactive AR/VR experiences into education. Utilizing 3D models and virtual reality, we create immersive and interactive courseware, particularly beneficial for fields requiring in-depth understanding of object structures and functionalities.",
    roleLabel: "My Role",
    roleBody:
      "As the Chief Experience Designer for this project, my responsibilities include close collaboration with stakeholders, synthesizing user needs, prioritizing tasks, and leading the development of the visual language for the program.",
    achievementLabel: "Project Achievements",
    achievementBody:
      "Significantly enhanced participant engagement and established a sustainable feedback loop to facilitate the project's ongoing expansion over time.",
    researchLabel: "Research and Analysis",
    researchHeadline: (
      <>
        What is <span className="text-blue-copy">VR Lesson Creator</span>
      </>
    ),
    researchBody:
      "VR Course Creator caters to the VR education platform, which boasts an extensive library of model resources. Teachers can seamlessly integrate these models into VR courseware, crafting 3D presentations that can be played on AR and VR devices.",
    insightLabel: "USER INSIGHTS",
    insightHeadline: (
      <>
        “Teachers request more{" "}
        <span className="text-blue-copy">
          <em>simulation tools</em>
        </span>{" "}
        to support their teaching needs.”
      </>
    ),
    insightBody: (
      <>
        I interviewed 7 vocational school teachers to understand their thoughts
        on courseware creation. Here&apos;s what they said:
        <br />
        <br />
        <strong>
          <em>
            1. “need for more simulation tools to enhance teaching”
            <br />
            2. “Needs an extensive library of content”
            <br />
            3. “......... is visually lacking and outdated.”
          </em>
        </strong>
      </>
    ),
    insightCards: [
      {
        src: images.insight1,
        alt: "Simulation tool insight",
        text: '"need for more simulation tools to enhance teaching"',
      },
      {
        src: images.insight2,
        alt: "Content library insight",
        text: '"Needs an extensive library of content"',
      },
      {
        src: images.insight3,
        alt: "Visual language insight",
        text: '"......... is visually lacking and outdated."',
      },
    ],
    competitiveLabel: "Competitive Analysis",
    competitiveHeadline: "Exploring Solutions for Courseware Creation",
    competitiveBody:
      "Benchmarking against presentation tools and model learning solutions. While PowerPoint allows for 3D integration, it has limited online model resources and interactive actions, falling short of meeting the demands of vocational education for model-centric educational tools. Model interaction is rich in dedicated tools, but they typically showcase only one model at a time, limiting the depth of content expansion.",
    competitorCards: [
      {
        src: images.competitor1,
        alt: "PowerPoint analysis",
        title: "PowerPoint",
        text: "Feature-rich and widely adopted, with strong customization including model insertion. However, limited resources, especially for education, and advanced features come with a learning curve.",
      },
      {
        src: images.competitor2,
        alt: "Google Slides analysis",
        title: "Google Slides",
        text: "Simplified interface for easy collaboration and online sharing, ideal for basic presentation needs compared to PowerPoint.",
      },
      {
        src: images.competitor3,
        alt: "eon-xr analysis",
        title: "eon-xr",
        text: "Individual lessons with multimedia integration, featuring model perspectives, labels, and animations. Content is explained through recorded operations with playback.",
      },
    ],
    goalsLabel: "Three Goals",
    goals: [
      "user-friendly tool with virtually no learning curve",
      "easy to find the content you need",
      "UPdate the look and feel",
    ],
    concepts: [
      {
        label: "Content Creation",
        headline: "More presets, less customization confusion.",
        src: images.contentCreation,
        alt: "Content creation workflow",
      },
      {
        label: "Online 3D Resources",
        headline:
          "Categorized by profession, offering 1:1 model materials for 3D showcasing of key concepts",
        src: images.onlineResources,
        alt: "Online 3D resource library",
      },
      {
        label: "Model Editing",
        headline:
          "Perspective and exploded views, play principle animations, record operations for explanations.",
        src: images.modelEditing,
        alt: "Model editing interface",
      },
      {
        label: "View with VR tools",
        headline:
          "Publish on one platform, view on multiple devices; VR playback enhances the teaching experience.",
        src: images.vrTools,
        alt: "VR playback tools",
      },
    ],
    challenge:
      "Challenges abound; design is a constant cycle of validation and optimization.",
    refinements: [
      {
        label: "Optimize the content library experience",
        headline: "Replace pop-ups with adaptive design",
        src: images.library,
        alt: "Content library optimization",
      },
      {
        label: "Optimize the model editing experience",
        headline: '"Double-click for visibility toggle instead of hide."',
        src: images.editingExperience,
        alt: "Model editing optimization",
      },
    ],
    contactTitle: "Curious for more details?",
    contactBody: "Reach out and let's chat! Contact me at",
  },
  zh: {
    subtitle: "用户体验设计",
    overviewLabel: (
      <>
        项目<em>概览</em>
      </>
    ),
    overviewHeadline: "让教师备课更简单，让关键知识点更直观",
    overviewBody:
      "随着新兴技术在教育场景中的普及，我们探索将交互式 AR/VR 体验融入课堂。借助 3D 模型与虚拟现实能力，教师可以创建更沉浸、更具互动性的课件，尤其适用于需要深入理解物体结构与功能原理的专业课程。",
    roleLabel: "我的角色",
    roleBody:
      "作为该项目的体验设计负责人，我负责与业务和研发团队密切协作，梳理用户需求、明确任务优先级，并主导产品视觉语言与核心体验框架的设计。",
    achievementLabel: "项目成果",
    achievementBody:
      "项目显著提升了课堂参与度，并建立了可持续的反馈机制，为后续内容与功能的持续扩展提供了基础。",
    researchLabel: "研究与分析",
    researchHeadline: (
      <>
        什么是 <span className="text-blue-copy">VR Lesson Creator</span>
      </>
    ),
    researchBody:
      "VR Lesson Creator 面向 VR 教育平台，平台内置丰富的模型资源库。教师可以将这些模型快速整合到 VR 课件中，制作可在 AR 与 VR 设备上播放的 3D 演示内容。",
    insightLabel: "用户洞察",
    insightHeadline: (
      <>
        “教师需要更多
        <span className="text-blue-copy">
          <em>仿真工具</em>
        </span>
        来支撑教学表达。”
      </>
    ),
    insightBody: (
      <>
        我访谈了 7 位职业院校教师，了解他们在课件制作中的真实需求。访谈中反复出现的反馈包括：
        <br />
        <br />
        <strong>
          <em>
            1. “需要更多仿真工具来增强教学效果”
            <br />
            2. “需要更丰富的内容资源库”
            <br />
            3. “现有课件视觉表现不足，也比较陈旧”
          </em>
        </strong>
      </>
    ),
    insightCards: [
      {
        src: images.insight1,
        alt: "仿真工具用户洞察",
        text: '"需要更多仿真工具来增强教学效果"',
      },
      {
        src: images.insight2,
        alt: "内容资源库用户洞察",
        text: '"需要更丰富的内容资源库"',
      },
      {
        src: images.insight3,
        alt: "视觉体验用户洞察",
        text: '"现有课件视觉表现不足，也比较陈旧"',
      },
    ],
    competitiveLabel: "竞品分析",
    competitiveHeadline: "探索课件创作工具的解决方案",
    competitiveBody:
      "我们对比了演示文稿工具和模型学习类产品。PowerPoint 虽然支持 3D 内容插入，但在线模型资源和交互动作较有限，难以满足职业教育中以模型为核心的教学需求。专门的模型交互工具虽然操作丰富，但通常只能围绕单个模型展开，限制了课程内容的延展性。",
    competitorCards: [
      {
        src: images.competitor1,
        alt: "PowerPoint 竞品分析",
        title: "PowerPoint",
        text: "功能完善、使用广泛，支持较强的自定义能力和模型插入。但教育资源有限，高级功能也存在一定学习成本。",
      },
      {
        src: images.competitor2,
        alt: "Google Slides 竞品分析",
        title: "Google Slides",
        text: "界面简洁，便于协作和在线分享，更适合基础演示需求。",
      },
      {
        src: images.competitor3,
        alt: "eon-xr 竞品分析",
        title: "eon-xr",
        text: "以独立课程为单位整合多媒体内容，支持模型视角、标注和动画，并通过录制操作进行播放讲解。",
      },
    ],
    goalsLabel: "三个目标",
    goals: [
      "几乎零学习成本的易用工具",
      "快速找到需要的内容资源",
      "更新整体视觉与体验",
    ],
    concepts: [
      {
        label: "内容创作",
        headline: "更多预设能力，减少自定义时的困惑。",
        src: images.contentCreation,
        alt: "内容创作流程",
      },
      {
        label: "在线 3D 资源",
        headline: "按专业分类，提供 1:1 模型素材，用于关键概念的 3D 展示。",
        src: images.onlineResources,
        alt: "在线 3D 资源库",
      },
      {
        label: "模型编辑",
        headline: "支持透视与爆炸视图、原理动画播放，并可录制操作用于讲解。",
        src: images.modelEditing,
        alt: "模型编辑界面",
      },
      {
        label: "使用 VR 工具观看",
        headline: "在同一平台发布，多设备观看；通过 VR 播放增强教学体验。",
        src: images.vrTools,
        alt: "VR 播放工具",
      },
    ],
    challenge: "挑战始终存在，设计是在验证与优化中不断迭代的过程。",
    refinements: [
      {
        label: "优化内容资源库体验",
        headline: "用自适应设计替代弹窗式浏览。",
        src: images.library,
        alt: "内容资源库优化",
      },
      {
        label: "优化模型编辑体验",
        headline: "用双击切换可见性，替代传统的隐藏操作。",
        src: images.editingExperience,
        alt: "模型编辑体验优化",
      },
    ],
    contactTitle: "想了解更多细节？",
    contactBody: "欢迎联系我继续交流",
  },
};

function DetailImage({ src, alt }: ImageAsset) {
  return <img src={src} width="920" alt={alt} loading="lazy" className="detail-image" />;
}

export default async function VrLessonCreatorPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const page = copy[locale];

  return (
    <div data-page="selfly-style">
      <SiteHeader locale={locale} surface="white" />
      <main>
        <img src={coverImage} alt="VR Lesson Creator cover" className="project-cover" />

        <div id="w-node-_0befc76b-828c-2822-f9fa-f2c6de040bbf-f064f975" className="project-title">
          <h1 className="text-bigt">VR-PPT</h1>
          <div className="text">{page.subtitle}</div>
        </div>

        <div className="lr30-t100-b200">
          <div className="max-w-1024">
            <div className="w-layout-grid grid-bt-t-t">
              <div id="w-node-_060ad03c-8fc5-ee81-a070-ea855606f4b8-f064f975" className="text-blue">
                {page.overviewLabel}
              </div>
              <div id="w-node-_060ad03c-8fc5-ee81-a070-ea855606f4ba-f064f975" className="text-24">
                {page.overviewHeadline}
              </div>
              <div id="w-node-_060ad03c-8fc5-ee81-a070-ea855606f4bc-f064f975" className="text">
                {page.overviewBody}
              </div>
            </div>
            <div className="w-layout-grid grid-t-t">
              <div id="w-node-_060ad03c-8fc5-ee81-a070-ea855606f4bf-f064f975" className="text-blod">
                {page.roleLabel}
              </div>
              <div id="w-node-_060ad03c-8fc5-ee81-a070-ea855606f4c1-f064f975" className="text">
                {page.roleBody}
              </div>
            </div>
            <div className="w-layout-grid grid-t-t">
              <div id="w-node-cd5a17fc-958f-e37b-b91f-53d70f33571a-f064f975" className="text-blod">
                <strong>{page.achievementLabel}</strong>
              </div>
              <div id="w-node-cd5a17fc-958f-e37b-b91f-53d70f33571c-f064f975" className="text">
                {page.achievementBody}
              </div>
            </div>
          </div>
        </div>

        <div className="lr30-t100-b200">
          <div className="max-w-1024">
            <div className="text-blue">{page.researchLabel}</div>
            <div className="w-layout-grid grid-l-r">
              <div className="text-24">{page.researchHeadline}</div>
              <div id="w-node-_3babc43d-da1f-37b5-ed51-cbcc687bc051-f064f975" className="text">
                {page.researchBody}
              </div>
            </div>
            <DetailImage src={images.overview} alt="VR Lesson Creator overview" />
          </div>
        </div>

        <div className="lr30-t100-b200">
          <div className="max-w-1024">
            <div className="text-blue">
              <strong>{page.insightLabel}</strong>
            </div>
            <div className="w-layout-grid project-description-grid-copy">
              <div id="w-node-_11649792-e80e-1f89-a0cf-622517955c56-f064f975">
                <div className="text-24">{page.insightHeadline}</div>
              </div>
              <div id="w-node-_11649792-e80e-1f89-a0cf-622517955c5d-f064f975" className="text">
                {page.insightBody}
              </div>
            </div>
            <div className="w-layout-grid grid-pt-pt-pt">
              {page.insightCards.map((card) => (
                <img key={card.src} src={card.src} loading="lazy" alt={card.alt} className="image-2" />
              ))}
              {page.insightCards.map((card) => (
                <div key={card.text} className="text-card-copy">
                  {card.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lr30-t100-b200">
          <div className="max-w-1024">
            <div className="text-blue">
              <strong>{page.competitiveLabel}</strong>
            </div>
            <div className="w-layout-grid grid-l-r">
              <div className="text-24">{page.competitiveHeadline}</div>
              <div id="w-node-_63ed2519-6668-77a7-f7f8-c61a7af73731-f064f975" className="text">
                {page.competitiveBody}
              </div>
            </div>
            <div className="w-layout-grid grid-pt-pt-pt">
              {page.competitorCards.map((card) => (
                <img key={card.src} src={card.src} loading="lazy" alt={card.alt} className="image-2" />
              ))}
              {page.competitorCards.map((card) => (
                <div key={card.title} className="text-card-t">
                  {card.title}
                </div>
              ))}
              {page.competitorCards.map((card) => (
                <div key={card.text} className="text-card">
                  {card.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="zhongjianfenge">
          <div className="zhongjian-copy">
            <div className="w-layout-grid grid-13">
              <img src={images.goalsIcon} loading="lazy" alt="" />
              {page.goals.map((goal, index) => (
                <div
                  key={goal}
                  id={
                    [
                      "w-node-_43c47273-8e3b-ce9f-f7d5-5c5f5cda22d2-f064f975",
                      "w-node-_2aff623c-813a-ef64-9aab-3786b982d269-f064f975",
                      "w-node-_22a89e5b-1a1b-ef05-aaa4-e54f82961a85-f064f975",
                    ][index]
                  }
                  className="text-24-copy-copy"
                >
                  {goal}
                </div>
              ))}
              <img
                src={images.goalsLine}
                loading="lazy"
                id="w-node-_4cae9842-9a54-bc78-a9dd-a29e3a1050fb-f064f975"
                alt=""
                className="image-5"
              />
              <div id="w-node-_36ef5cd8-2fd9-608b-fa2c-23b43f5ad71d-f064f975" className="text-blue-copy">
                {page.goalsLabel}
              </div>
            </div>
          </div>
        </div>

        {page.concepts.map((concept) => (
          <div key={concept.label} className="lr30-t100-b200">
            <div className="max-w-1024">
              <div className="w-layout-grid concept">
                <div className="text-blue">
                  <strong>{concept.label}</strong>
                </div>
                <div className="text-24">{concept.headline}</div>
                <DetailImage src={concept.src} alt={concept.alt} />
              </div>
            </div>
          </div>
        ))}

        <div className="zhongjianfenge">
          <div className="zhongjian">
            <div className="w-layout-grid zhongjian2">
              <img src={images.challenge} loading="lazy" alt="" />
              <div id="w-node-_9da16aa3-3772-1961-f791-68937100b197-f064f975" className="text-24-copy">
                {page.challenge}
              </div>
              <img
                src={images.challengeLine}
                loading="lazy"
                id="w-node-_9da16aa3-3772-1961-f791-68937100b199-f064f975"
                alt=""
                className="image-5"
              />
            </div>
          </div>
        </div>

        {page.refinements.map((concept) => (
          <div key={concept.label} className="lr30-t100-b200">
            <div className="max-w-1024">
              <div className="w-layout-grid concept">
                <div className="text-blue">
                  <strong>{concept.label}</strong>
                </div>
                <div className="text-24">{concept.headline}</div>
                <DetailImage src={concept.src} alt={concept.alt} />
              </div>
            </div>
          </div>
        ))}

        <div className="lr30-t100-b200">
          <div className="container">
            <div className="email-section">
              <h3>{page.contactTitle}</h3>
              <p>{page.contactBody}</p>
              <a href="mailto:lijaemin1993@gmail.com?subject=You've%20got%20mail!" className="email-link">
                lijaemin1993@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
