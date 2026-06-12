import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
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
                src="/videos/model-editor/overview.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className={styles.projectHeroMeta}>
                <span>2023–2024</span>
                <span className={styles.projectHeroMetaDot}>·</span>
                <span>UX &amp; UI Design Lead</span>
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
                  作为体验设计负责人，我将抽象的功能需求转化为完整的编辑器体验方案，
                  负责<strong className={styles.positioningEmphasis}>核心交互、界面布局与视觉设计</strong>。
                  通过梳理复杂的 3D 编辑流程，将材质、结构、动画等专业能力转化为更直观、易理解的操作方式。
                </p>
                <p className={styles.roleLabel}>项目成果</p>
                <p>
                  项目降低了非专业用户使用 3D 内容的门槛，让教师无需建模经验，
                  也能快速制作<strong className={styles.positioningEmphasis}>适合课堂展示的互动模型</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.sectionRule} />

        {/* ─── Core Challenge ──────────────────────────────── */}
        <div className={`${styles.positioningSection} ${styles.positioningSectionLarge}`}>
          <div className={`${styles.positioningInner} ${styles.positioningInnerCentered}`}>
            <h2 className={styles.conceptHeadline}>我们应该怎么<span className={styles.conceptHeadlineEmphasis}>改进模型编辑器的用户体验？</span></h2>

            <div className={styles.protoEvidence}>
              <Image
                className={styles.protoEvidenceImage}
                src="/images/model-editor/原型.png"
                alt="Model Editor 开发原型"
                width={1440}
                height={900}
                style={{ width: "100%", height: "auto" }}
              />
              <p className={`${styles.positioningLabel} ${styles.protoIntroLabel}`}>原型分析</p>
              <div className={styles.protoIntroRow}>
                <h3 className={styles.protoIntroTitle}>
                  <span className={styles.positioningHeadingLight}>从现有原型，</span>
                  <br />
                  <span className={styles.positioningHeadingDark}>理解编辑关系</span>
                </h3>
                <div>
                  <div className={styles.protoAreas}>
                    <h4>当前原型</h4>
                    <p>页面当前由四类区域组成：模型文件的全局编辑、全局编辑面板、模型交互空间和模型工具。</p>
                    <ul>
                      <li><strong>顶部</strong>：模型文件相关的全局功能入口。</li>
                      <li><strong>左侧</strong>：当前全局功能下展开的编辑面板。</li>
                      <li><strong>中间</strong>：模型的主要展示和交互空间。</li>
                      <li><strong>右侧</strong>：直接作用于模型的交互工具栏。</li>
                    </ul>
                  </div>
                  <div className={styles.protoAreas}>
                    <h4>使用场景</h4>
                    <p>在课件制作链路中，模型编辑器承担的是 3D 模型进入课件前的轻量处理任务，而不是完整的专业建模流程。因此，设计重点需要从”提供完整工具”转向”降低理解成本、缩短操作路径”，帮助教师更快完成模型整理。</p>
                  </div>
                  <div className={styles.protoAreas}>
                    <h4>设计方向</h4>
                    <p>基于这个判断，我围绕”这些功能是否被放在符合编辑路径的位置”，明确了三个设计方向：</p>
                    <ul>
                      <li><strong>更容易理解</strong>：明确不同功能的作用范围，让用户知道当前在编辑什么、会影响哪里。</li>
                      <li><strong>更容易操作</strong>：放大关键操作入口，减少专业参数和密集控件带来的使用负担。</li>
                      <li><strong>更快完成编辑任务</strong>：围绕「选择 → 调整 → 预览」组织流程，让用户更快完成模型编辑。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 1: 区域职责分离 ───────────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>🗂️</span>
              <p className={styles.chapterDesc}>
                从反复寻找工具位置，转向定义每个区域的职责，降低用户在工具、参数和模型之间来回判断的成本。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>区域职责分离</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「放工具」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「定义区域职责」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  在探索过程中，我尝试过把模型工具放在顶部、底部、右侧，也尝试过把编辑面板做成浮层或常驻侧栏。
                  这些方案都能容纳功能，但用户仍然需要在多个区域之间判断：这是全局操作、模型操作，还是当前对象的属性？
                </p>
                <p>
                  最终我没有继续寻找某一种“最佳工具栏位置”，而是重新定义页面区域：左侧负责编辑对象和模块入口，
                  中间保持完整模型视口，右侧承载模型操作与上下文参数，顶部只保留保存、预览、撤销等全局动作。
                  操作路径也随之收敛为「选对象 → 调属性 → 立即看效果」。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>左侧导航</strong>：承载文件、信息、属性、结构、爆炸、动画等编辑类型，让入口稳定存在</li>
                    <li><strong>中间视口</strong>：保留最大模型预览区域，让用户随时确认编辑结果</li>
                    <li><strong>右侧工具</strong>：靠近模型与参数面板，承载旋转、移动、颜色、显隐等上下文操作</li>
                    <li><strong>顶部操作</strong>：只保留撤销、预览、全屏、保存等全局动作，避免和具体编辑工具混层</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.beforeAfter}>
              <div>
                <p className={styles.beforeAfterLabel}>早期方案：功能可见，但区域归属不清</p>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%881.png"
                  alt="初始版本界面布局"
                  width={960}
                  height={600}
                  className={styles.schemeImage}
                />
              </div>
              <div>
                <p className={styles.afterLabel}>最终方案：四个区域职责明确</p>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%9C%80%E5%90%8E%E6%96%B9%E6%A1%88.png"
                  alt="最终方案界面布局"
                  width={960}
                  height={600}
                  className={styles.schemeImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 2: 方案探索归纳 ───────────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>🧭</span>
              <p className={styles.chapterDesc}>
                将多轮布局尝试归纳成三类问题，说明最终方案不是样式选择，而是信息架构收敛。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>方案探索归纳</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「反复换位置」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「归纳布局原则」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  “太多方案”的价值不在于证明我尝试了很多样式，而在于它暴露了复杂编辑器最核心的矛盾：
                  工具越完整，越需要清晰的信息层级；否则用户会被功能位置牵着走，而不是围绕模型完成任务。
                </p>
                <p>
                  我把这些方案重新归纳为三类：顶部集中、底部工具栏和右侧工具列。
                  它们分别解决了入口可见性、操作贴近模型、工具靠近参数的问题，但也各自带来层级混乱、视线跳转或按钮堆叠。
                </p>
              </div>
            </div>

            <div className={styles.explorationCards}>
              <article className={styles.explorationCard}>
                <h4>顶部集中型</h4>
                <p>入口集中、容易发现，但模块导航、模型工具和保存预览混在同一层级，顶部变成过载区域。</p>
              </article>
              <article className={styles.explorationCard}>
                <h4>底部工具栏型</h4>
                <p>更贴近“看着模型操作”的直觉，但用户需要在左侧面板、右侧参数和底部工具之间形成三角跳转。</p>
              </article>
              <article className={styles.explorationCard}>
                <h4>右侧工具列型</h4>
                <p>靠近属性面板和模型操作，但按钮列过长，工具和具体参数之间仍需要用户自己建立关系。</p>
              </article>
            </div>

            <div className={styles.iterationGrid}>
              <div>
                <Image
                  src="/images/model-editor/旧的方案们/太多方案了/颜色方案-10.png"
                  alt="顶部集中型探索方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>顶部集中：路径短，但层级容易变平</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/旧的方案们/太多方案了/颜色方案-1.png"
                  alt="底部工具栏探索方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>底部工具栏：贴近模型，但形成上下跳转</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/旧的方案们/太多方案了/颜色方案-2.png"
                  alt="右侧工具列探索方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>右侧工具列：靠近参数，但按钮堆叠偏重</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/旧的方案们/太多方案了/颜色方案-6.png"
                  alt="居中导航与右侧工具组合方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>居中导航：模块清楚，但右侧工具仍分散</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/旧的方案们/太多方案了/颜色方案-8.png"
                  alt="顶部按钮组与右侧工具组合方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>按钮组导航：反馈更强，但横向空间占用大</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%9C%80%E5%90%8E%E6%96%B9%E6%A1%88.png"
                  alt="最终收敛方案"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationFinalCaption}>→ 最终：按区域职责收敛</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 3: 颜色编辑器的信息层级 ────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>🎨</span>
              <p className={styles.chapterDesc}>
                将完整的颜色控制系统从独立工具转化为对象属性，减少用户寻找功能和理解参数的路径。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>颜色编辑器的信息层级</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「独立颜色工具」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「对象属性的一部分」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  初版颜色面板把色盘、RGB、透明度、亮度、对比度和预设色完整展示出来。
                  它功能完整，但对用户来说过早暴露了参数系统：用户真正想做的通常不是“打开颜色工具”，
                  而是“把当前选中的部件改成某种颜色”。
                </p>
                <p>
                  因此颜色编辑不应该像一个独立漂浮的工具，而应该成为当前对象属性的一部分。
                  最终方案把颜色调整收进属性编辑体系，只在用户触达颜色属性时展示完整控制。
                  逻辑从「颜色工具 → 找对象」变成「选中对象 → 对象属性 → 颜色」。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>颜色从工具变成属性</strong>：颜色不再独立漂浮，而归属于当前选中的对象</li>
                    <li><strong>参数按需出现</strong>：只有进入颜色编辑时才展示完整控制</li>
                    <li><strong>从功能入口转向对象上下文</strong>：用户路径变成“选中对象 → 编辑属性 → 调整颜色”</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.iterationGrid}>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%881.png"
                  alt="旧方案：右侧独立浮层"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>右侧独立浮层：功能完整，但像外部工具</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%882.png"
                  alt="方案2：去掉顶部信息，按钮放中间"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>去掉顶部信息：模型更突出，但入口关系仍不稳定</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%883.png"
                  alt="方案3：全部放在顶部"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>全部放在顶部：入口集中，但与模型编辑混层</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%884.png"
                  alt="方案4：顶部导航改成按钮组"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>按钮组导航：反馈更强，但顶部空间变重</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%885.png"
                  alt="方案5：侧边+顶部导航"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>侧边 + 顶部导航：结构清楚，但职责仍可继续收敛</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%9C%80%E5%90%8E%E6%96%B9%E6%A1%88.png"
                  alt="最终方案：收进属性体系"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationFinalCaption}>→ 最终：颜色进入对象属性体系</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 4: 让模型成为视觉中心 ──────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <div className={styles.chapterCopy}>
              <span className={styles.chapterIcon}>👁️</span>
              <p className={styles.chapterDesc}>
                围绕模型预览区域重新分配界面空间，使编辑过程保持连续的实时反馈。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <p className={styles.positioningLabel}>让模型成为视觉中心</p>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                <span className={styles.narrativeHeadlineLight}>从「面板包围模型」</span><br />
                <span className={styles.narrativeHeadlineDark}>到「模型始终居中」</span>
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  3D 编辑器最大的矛盾：用户需要大量控制面板，但同时需要一直盯着模型。
                  迭代过程中，右侧颜色面板与左侧属性面板同时存在，
                  模型视口被压缩到中间的剩余空间，用户编辑时视觉重心被工具分散。
                </p>
                <p>
                  最终布局确立了「模型优先」原则：顶部只保留全局操作，
                  左侧收窄为图标导航加折叠属性面板，右侧参数只在操作上下文中展开。
                  模型视口始终占据最大比例，让「调参数」和「看效果」之间的距离消失。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>减少常驻面板</strong>：左侧收为图标导航，属性按需展开</li>
                    <li><strong>顶部操作精简</strong>：只保留撤销、保存等全局功能</li>
                    <li><strong>右侧按需出现</strong>：颜色等细节参数随选中上下文浮现，不占常驻空间</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.finalLayoutEvidence}>
              <Image
                src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%9C%80%E5%90%8E%E6%96%B9%E6%A1%88.png"
                alt="最终方案中的左侧导航、中间模型视口和右侧上下文工具"
                width={1440}
                height={810}
                className={styles.finalLayoutImage}
              />
              <div className={styles.layoutPrinciples}>
                <p><strong>左侧</strong>编辑对象与模块入口</p>
                <p><strong>中间</strong>最大化模型预览</p>
                <p><strong>右侧</strong>上下文工具与参数</p>
                <p><strong>顶部</strong>保存、预览等全局动作</p>
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
              src="/videos/model-editor/material-library.mp4"
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
              src="/videos/model-editor/explode-view.mp4"
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
              src="/videos/model-editor/transparency-visibility.mp4"
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
              src="/videos/model-editor/animation.mp4"
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
              src="/videos/model-editor/overview.mp4"
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
                  而取决于用户能否稳定理解当前对象、可用操作和反馈结果之间的关系。
                </p>
                <p>
                  对非专业用户来说，最重要的不是一次性看到所有能力，而是知道“我现在正在编辑什么、这个对象能做什么、调整后会发生什么”。
                  最终方案通过区域职责分离和上下文编辑，把专业 3D 工具转化为更接近教学任务的操作流程。
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
