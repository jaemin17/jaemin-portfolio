import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { FinalLayoutCarousel } from "@/components/FinalLayoutCarousel";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../project-detail.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ModelEditorPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.page} data-page="plain-white">
      <SiteHeader locale={locale} surface="white" />
      <main>

        {/* Hero */}
        <div className={styles.projectHero}>
          <div className={styles.projectHeroInner}>
            <h1 className={styles.projectHeroTitle}>
              <span className={styles.projectHeroTitleLight}>面向教学的 </span>
              <span className={styles.projectHeroTitleHighlight}>3D 模型编辑器</span>
            </h1>
            <p className={styles.projectHeroSubtitle}>
              帮助非专业用户完成材质、结构、动画与标注预处理。
            </p>
            <div className={styles.projectHeroMedia}>
              <video
                className={styles.projectHeroCoverVideo}
                src={assetPath("/videos/model-editor/overview.mp4")}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className={styles.projectHeroMeta}>
                <span>2023–2024</span>
                <span className={styles.projectHeroMetaDot}>·</span>
                <span>交互 &amp; 视觉设计</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Project Overview (selfly0-style positioning) ─── */}
        <div className={styles.positioningSection}>
          <div className={styles.positioningInner}>
            <p className={styles.positioningLabel}>项目背景</p>
            <div className={styles.positioningGrid}>
              <h2 className={styles.positioningHeading}>
                <span className={styles.positioningHeadingLight}>从原始 3D 模型，</span>
                <br />
                <span className={styles.positioningHeadingDark}>到课堂可用的教学素材</span>
              </h2>
              <div className={styles.positioningBody}>
                <p>
                  3D 模型进入课堂前，通常需要根据教学场景进行二次编辑，例如添加部件说明、调整模型结构、设置拆解展示或动画效果。
                </p>
                <p>
                  Model Editor 是一款面向 3D 课件制作的<strong className={styles.positioningEmphasis}>模型编辑工具</strong>，帮助中高职教师快速将模型整理为适合课堂讲解的互动素材。
                </p>
                <p className={styles.roleLabel}>我的角色</p>
                <p>
                  在已有功能框架上继续推进体验设计，围绕编辑器的操作流程、界面层级与视觉一致性完善全量界面，并与开发对接推动方案落地上线。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Design Goals (设计目的) ─── */}
        <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
          <div className={`${styles.positioningInner} ${styles.positioningInnerCentered}`}>
            <div className={styles.protoEvidence}>
              <p className={`${styles.positioningLabel} ${styles.protoIntroLabel}`}>设计目标</p>
              <div className={styles.protoIntroRow}>
                <h3 className={styles.protoIntroTitle}>
                  <span className={styles.positioningHeadingDark}>面向课件的轻量处理，</span>
                  <br />
                  <span className={styles.positioningHeadingLight}>而不是专业建模</span>
                </h3>
                <div>
                  <div className={styles.protoAreas}>
                    <p>模型编辑器承担的是 3D 模型进入课件前的<strong className={styles.positioningEmphasis}>轻量处理任务</strong>，而不是完整的专业建模流程。因此，设计重点需要从「提供完整工具」转向「<strong className={styles.positioningEmphasis}>降低理解成本、缩短操作路径</strong>」，帮助教师更快完成模型整理。</p>
                  </div>
                </div>
              </div>
              <div className={styles.directionPanel}>
                <div className={styles.directionCards}>
                  <div className={styles.directionCard}>
                    <div className={`${styles.directionCardVisual} ${styles.directionCardVisualUnderstand}`}>
                      <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                        <path d="M32 6a26 26 0 1 0 0 52 26 26 0 0 0 0-52Zm0 10a16 16 0 1 1 0 32 16 16 0 0 1 0-32Zm0 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
                      </svg>
                      <span>更容易理解</span>
                    </div>
                    <p>明确不同功能的作用范围，让用户知道当前在编辑什么、会影响哪里。</p>
                  </div>
                  <div className={styles.directionCard}>
                    <div className={`${styles.directionCardVisual} ${styles.directionCardVisualOperate}`}>
                      <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                        <path d="M19 7c-2.6-1.1-5.4.8-5.4 3.6v37.8c0 3.3 3.8 5.1 6.4 3.1l8.5-6.6 5.4 11.5c1.2 2.5 4.2 3.6 6.8 2.4l3.7-1.8c2.5-1.2 3.6-4.2 2.4-6.8l-5.1-10.8h10.9c3.7 0 5.2-4.8 2.2-6.9L19 7Z" />
                      </svg>
                      <span>更容易操作</span>
                    </div>
                    <p>放大关键操作入口，减少专业参数和密集控件带来的使用负担。</p>
                  </div>
                  <div className={styles.directionCard}>
                    <div className={`${styles.directionCardVisual} ${styles.directionCardVisualFast}`}>
                      <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                        <path d="M32 6c14.4 0 26 11.6 26 26S46.4 58 32 58 6 46.4 6 32 17.6 6 32 6Zm13.7 19.3c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0L28.8 30.8l-4.6-4.6c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7l7.4 7.4c1.6 1.6 4.1 1.6 5.7 0l14.1-14Z" />
                      </svg>
                      <span>更快完成编辑任务</span>
                    </div>
                    <p>围绕「选择 → 调整 → 预览」组织流程，让用户更快完成模型编辑。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Core Challenge ──────────────────────────────── */}
        <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
          <div className={`${styles.positioningInner} ${styles.positioningInnerCentered}`}>
            <div className={styles.protoEvidence}>
              <p className={`${styles.positioningLabel} ${styles.protoIntroLabel}`}>当前状态</p>
              <div className={styles.protoIntroRow}>
                <h3 className={styles.protoIntroTitle}>
                  <span className={styles.positioningHeadingLight}>理清每个区域的职责，</span>
                  <br />
                  <span className={styles.positioningHeadingDark}>找到体验的改进点</span>
                </h3>
                <div>
                  <div className={styles.protoAreas}>
                    <p>早期原型已经给出了<strong className={styles.positioningEmphasis}>基本功能分区</strong>：顶部承载编辑模块入口、过程控制和全局结果操作，左侧为编辑面板，中间为模型预览区，右侧为模型工具与参数调整区。但不同功能的<strong className={styles.positioningEmphasis}>操作性质、视觉层级和影响范围</strong>仍需要进一步区分。</p>
                    <p>同时，如果各区域都按原型展开，<strong className={styles.positioningEmphasis}>模型预览区会被挤压</strong>；而 3D 编辑器最关键的操作反馈来自模型本身，因此后续设计需要在明确功能层级的基础上，重新平衡<strong className={styles.positioningEmphasis}>「工具密度」与「预览空间」</strong>。</p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>体验设计方向</h4>
                    <ul>
                      <li>为模型预览释放更多空间</li>
                      <li>不同操作更易识别</li>
                      <li>工具调整更轻量可控</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
              <div className={styles.protoEvidenceFrame}>
                <div className={styles.protoEvidenceCanvas}>
                  <Image
                    className={styles.protoEvidenceImage}
                    src={assetPath("/images/model-editor/原型5.png")}
                    alt="Model Editor 开发原型"
                    width={1440}
                    height={900}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className={`${styles.protoAnnotation} ${styles.protoAnnotationTop}`}>
                    <strong>顶部</strong>模型文件相关的全局功能入口
                  </div>
                  <div className={`${styles.protoAnnotation} ${styles.protoAnnotationLeft}`}>
                    <strong>左侧</strong>当前全局功能下展开的编辑面板
                  </div>
                  <div className={`${styles.protoAnnotation} ${styles.protoAnnotationCenter}`}>
                    <strong>中间</strong>模型的展示和交互空间
                  </div>
                  <div className={`${styles.protoAnnotation} ${styles.protoAnnotationRight}`}>
                    <strong>右侧</strong>模型工具与参数调整区
                  </div>
                </div>
                <p className={styles.protoEvidenceCaption}>早期原型</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 让模型成为视觉中心 ──────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>👁️</span>
              <p className={styles.chapterDesc}>
                围绕模型预览区域重新分配界面空间，在有限空间内最大化模型的可视区域。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>模型预览最大化</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「面板包围模型」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「模型获得主要空间」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  在浏览器界面中，3D 模型预览区的尺寸同时受到宽度和高度的限制，由于需要保持固定比例，实际可视区域通常会受到<strong className={styles.positioningEmphasis}>较短一侧的约束</strong>。
                </p>
                <p>
                  在网页布局中，<strong className={styles.positioningEmphasis}>高度空间相对更为紧张</strong>，因此模型上下的固定区域都会影响预览区域的有效高度，使模型显示尺寸被压缩。
                </p>
                <p>
                  因此，我将顶部的固定全局编辑入口移动到左侧，以减少垂直空间的占用，并将其转移到<strong className={styles.positioningEmphasis}>更充裕的横向空间</strong>，从而为模型预览区释放更多高度。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>固定入口占高度</strong> → 移到左侧</li>
                    <li><strong>面板占空间</strong> → 按需展开、利用横向空间</li>
                    <li><strong>右侧参数浮层</strong> → 不挤压模型画布</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.finalLayoutEvidence}>
              <FinalLayoutCarousel
                slides={[
                  {
                    src: assetPath("/images/model-editor/3D教学工坊-模型编辑器 1.png"),
                    alt: "3D 教学工坊模型编辑器界面 1",
                    label: "最大化预览",
                  },
                  {
                    src: assetPath("/images/model-editor/3D教学工坊-模型编辑器 2.png"),
                    alt: "3D 教学工坊模型编辑器界面 2",
                    label: "全局编辑面板",
                  },
                  {
                    src: assetPath("/images/model-editor/3D教学工坊-模型编辑器3.png"),
                    alt: "3D 教学工坊模型编辑器界面 3",
                    label: "参数浮层",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* ─── REFINED Chapter 2: 操作与模型的关系 ───────────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>🔗</span>
              <p className={styles.chapterDesc}>
                不同性质的操作放在一起，反而更难被识别。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>操作归属</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>操作性质不同，</span><br />
                <span className={styles.narrativeHeadlineDark}>位置与视觉样式由此而定</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  顶部功能并非同一类型：编辑模块入口需要展开内容面板，模型工具需要实时观察反馈，<strong className={styles.positioningEmphasis}>保存、预览等高频全局动作则依循使用惯例置于右上角</strong>——性质不同，归属各有依据。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>左侧固定面板</strong>：内容多，部分操作不依赖模型视口</li>
                    <li><strong>右侧浮动工具</strong>：需实时观察反馈，浮动保持视口完整</li>
                    <li><strong>顶部全局动作</strong>：高频操作，右上角符合使用惯例</li>
                    <li><strong>顶部过程控制</strong>：辅助性操作，轻量图标降低视觉权重</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.protoEvidenceFrame}>
              <div className={styles.protoEvidenceCanvas}>
                <video
                  className={styles.protoEvidenceImage}
                  src={assetPath("/videos/model-editor/模型编辑器章节操作归属-视频.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 3: 工具操作轻量化 ───────────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>🎛️</span>
              <p className={styles.chapterDesc}>
                放大操作入口、弱化视觉噪声，让教师更容易识别和点击工具。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>工具操作轻量化</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「密集工具控件」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「轻量可识别操作」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  面向教师的编辑器不能依赖密集小控件来传达专业能力。因此，我将按钮、工具入口和参数控件做得更大，并强化选中状态，让用户能快速判断<strong className={styles.positioningEmphasis}>当前正在使用哪个工具</strong>。
                </p>
                <p>
                  右侧工具默认使用简洁的线性图标，降低工具列的视觉重量；hover 时再出现明确的功能文字提示，补足图标理解成本。整体按钮和控件使用轻量投影与浅色样式，保持可点击感，同时不抢走模型预览的注意力。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>放大点击目标</strong>：按钮和控件保持足够尺寸，降低点击门槛</li>
                    <li><strong>强化选中状态</strong>：当前工具和模块有明确反馈，减少状态迷失</li>
                    <li><strong>使用线性图标</strong>：降低视觉重量，减少工具区的界面占用</li>
                    <li><strong>hover 补充文字</strong>：默认轻量展示，悬停时说明具体功能</li>
                    <li><strong>统一轻量按钮和控件样式</strong>：用浅色与柔和投影表达可操作，不干扰模型预览</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.controlExploration}>
              <div className={styles.controlExplorationHeader}>
                <span>测试稿对比</span>
                <p>
                  在工具数量较多的情况下，我对不同按钮重量与识别方式进行比较，最终选择更轻量、点击目标更明确的控件样式。
                </p>
              </div>
              <div className={styles.controlExplorationGrid}>
                <div className={styles.controlExplorationCard}>
                  <div className={`${styles.controlExplorationPlaceholder} ${styles.controlExplorationPlaceholderDark}`}>
                    <span>黑色版本占位</span>
                  </div>
                  <h4>黑色高对比版本</h4>
                  <p>视觉聚焦更强，但工具区存在感偏高，容易抢走模型预览的注意力。</p>
                </div>
                <div className={styles.controlExplorationCard}>
                  <div className={styles.controlExplorationPlaceholder}>
                    <span>小按钮版本占位</span>
                  </div>
                  <h4>小按钮版本</h4>
                  <p>界面更轻，但点击目标和选中反馈偏弱，教师操作时识别成本更高。</p>
                </div>
                <div className={styles.controlExplorationCard}>
                  <div className={styles.controlExplorationPlaceholder}>
                    <span>最终版本占位</span>
                  </div>
                  <h4>最终轻量版本</h4>
                  <p>保留足够点击面积，用线性图标、hover 提示和轻量控件平衡易用性与界面重量。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Design Goals ────────────────────────────────── */}
        <div className={styles.divider}>
          <div className={styles.dividerInner}>
            <div className={styles.dividerTitle}>Design Outcome</div>
            <div className={styles.dividerGoals}>
              <p>围绕模型的实时反馈</p>
              <p>按教学任务组织专业能力</p>
              <p>用上下文降低参数理解成本</p>
            </div>
          </div>
        </div>

        {/* ─── Material Library ────────────────────────────── */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Material Library</div>
            <p className={styles.conceptHeadline}>
              预设材质一键应用，支持金属、木纹、塑料等常见材质切换
            </p>
            <p className={styles.conceptValue}>
              设计价值：用可感知的材质预设替代专业参数理解，让教师通过试选就能快速接近课堂需要的视觉效果。
            </p>
            <video
              className={styles.video}
              src={assetPath("/videos/model-editor/material-library.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* ─── Structure View ──────────────────────────────── */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Structure View</div>
            <p className={styles.conceptHeadline}>
              树状结构视图与爆炸动画，清晰展示模型层级关系
            </p>
            <p className={styles.conceptValue}>
              设计价值：把复杂模型拆成可讲解的结构层级，帮助教师在课堂中说明部件关系和装配逻辑。
            </p>
            <video
              className={styles.video}
              src={assetPath("/videos/model-editor/explode-view.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* ─── Transparency & Visibility ───────────────────── */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Transparency &amp; Visibility</div>
            <p className={styles.conceptHeadline}>
              透视模式与显隐控制，快速聚焦目标部件
            </p>
            <p className={styles.conceptValue}>
              设计价值：让用户不需要反复移动视角，也能快速隔离关键部件，降低课堂演示中的信息干扰。
            </p>
            <video
              className={styles.video}
              src={assetPath("/videos/model-editor/transparency-visibility.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* ─── Animation ───────────────────────────────────── */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Animation</div>
            <p className={styles.conceptHeadline}>
              自定义动画时间轴，精准控制每个部件的运动节奏
            </p>
            <p className={styles.conceptValue}>
              设计价值：把静态模型转化为可演示的运动过程，让结构变化、操作步骤和部件关系更容易被学生理解。
            </p>
            <video
              className={styles.video}
              src={assetPath("/videos/model-editor/animation.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* ─── Labels ──────────────────────────────────────── */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Labels</div>
            <p className={styles.conceptHeadline}>
              为模型部件添加标注，清晰传达结构与功能信息
            </p>
            <p className={styles.conceptValue}>
              设计价值：把模型说明直接叠加到演示对象上，减少教师在模型、文字说明和口头讲解之间切换的负担。
            </p>
            <video
              className={styles.video}
              src={assetPath("/videos/model-editor/overview.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* ─── Reflection ─────────────────────────────────── */}
        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>复杂编辑器的重点，</span><br />
                <span className={styles.narrativeHeadlineDark}>不是减少功能</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  这个项目让我更明确地意识到，复杂工具的体验质量不取决于功能是否足够多，
                  而取决于用户能否稳定理解<strong className={styles.positioningEmphasis}>当前对象、可用操作和反馈结果之间的关系</strong>。
                </p>
                <p>
                  对非专业用户来说，最重要的不是一次性看到所有能力，而是知道<strong className={styles.positioningEmphasis}>「我现在正在编辑什么、这个对象能做什么、调整后会发生什么」</strong>。
                  最终方案通过区域职责分离和上下文编辑，把专业 3D 工具转化为<strong className={styles.positioningEmphasis}>更接近教学任务的操作流程</strong>。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>项目反思</h4>
                  <ul>
                    <li><strong>复杂度不能消失</strong>：但可以通过清晰归属被用户理解</li>
                    <li><strong>功能不能平均展示</strong>：需要围绕对象和任务渐进出现</li>
                    <li><strong>模型是反馈中心</strong>：所有编辑路径都应尽快回到模型本身</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Contact ─────────────────────────────────────── */}
        <div className={styles.contact}>
          <h2>想了解更多细节？</h2>
          <p>欢迎联系我聊聊这个项目。</p>
          <a href="mailto:lijaemin1993@gmail.com" className={styles.contactLink}>
            lijaemin1993@gmail.com
          </a>
        </div>

      </main>
    </div>
  );
}
