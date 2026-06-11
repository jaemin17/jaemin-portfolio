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
              <span className={styles.projectHeroTitleHighlight}>3D 模型预处理工具</span>
            </h1>
            <p className={styles.projectHeroSubtitle}>
              无需建模基础，也能处理教学演示中的 3D 模型
            </p>
            <div className={styles.projectHeroMedia}>
              <video
                className={styles.projectHeroCoverVideo}
                src="/videos/tools/model.mp4"
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
                  Model Editor 是一款面向 3D 课件制作的<strong className={styles.positioningEmphasis}>模型编辑工具</strong>，
                  帮助中高职教师在模型导入 PPT / XR 课件前，
                  完成材质调整、结构拆解、显隐控制等预处理操作。
                </p>
                <p>
                  作为体验设计负责人，我将早期抽象的功能需求转化为完整的编辑器体验方案，
                  负责<strong className={styles.positioningEmphasis}>核心交互、界面布局与视觉设计</strong>。
                  通过梳理复杂的 3D 编辑流程，将材质、结构、动画等专业能力转化为更直观、易理解的操作方式。
                </p>
                <p>
                  项目降低了非专业用户使用 3D 内容的门槛，让教师无需建模经验，
                  也能快速制作<strong className={styles.positioningEmphasis}>适合课堂展示的互动模型</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Core Challenge ──────────────────────────────── */}
        <div className={styles.challengeSection}>
          <div className={styles.challengeInner}>
            <div className={styles.challengeRow}>
              <span className={styles.challengeIcon}>⚡</span>
              <h2 className={styles.challengeHeadline}>
                在有限空间内组织复杂编辑任务，<br />让用户始终关注模型本身
              </h2>
            </div>
          </div>
        </div>

        {/* ─── Chapter 1: 重构编辑工作流 ───────────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <span className={styles.chapterIcon}>🗂️</span>
            <div>
              <p className={styles.chapterLabel}>Chapter 01</p>
              <h2 className={styles.chapterTitle}>重构编辑工作流</h2>
              <p className={styles.chapterDesc}>
                从分散的顶部标签页，转向基于对象的三栏编辑体系，降低用户在工具与模型之间来回切换的成本。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                从「功能堆叠」<br />到「工作区域分离」
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  初版将工具栏、属性面板、参数设置全部混合在左侧区域，
                  用户的实际路径是：找功能 → 理解当前状态 → 修改参数 → 回到模型确认效果。
                  每一次调整都在多处来回，认知成本持续叠加。
                </p>
                <p>
                  最终方案将界面重组为三个清晰区域：左侧图标导航负责选择对象和属性类型，
                  中间视口保持完整的模型预览，右侧面板只显示当前上下文的调整参数。
                  操作路径收敛为「选择对象 → 调整属性 → 即时反馈」。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>顶部标签页 → 左侧图标导航</strong>：释放顶部空间，减少纵向信息压缩</li>
                    <li><strong>混合面板 → 分类属性面板</strong>：按选中对象展示相关属性，减少无关信息</li>
                    <li><strong>工具驱动 → 对象驱动</strong>：先确定操作对象，再展示对应工具</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.beforeAfter}>
              <div>
                <p className={styles.beforeAfterLabel}>初始版本</p>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%881.png"
                  alt="初始版本界面布局"
                  width={960}
                  height={600}
                  className={styles.schemeImage}
                />
              </div>
              <div>
                <p className={styles.afterLabel}>最终方案</p>
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

        {/* ─── Chapter 2: 颜色编辑器的信息层级 ────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <span className={styles.chapterIcon}>🎨</span>
            <div>
              <p className={styles.chapterLabel}>Chapter 02</p>
              <h2 className={styles.chapterTitle}>颜色编辑器的信息层级</h2>
              <p className={styles.chapterDesc}>
                将完整的颜色控制系统转化为上下文编辑，减少用户寻找功能的路径。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                从「独立工具」<br />到「上下文编辑」
              </h3>
              <div className={styles.narrativeBody}>
                <p>
                  初版颜色面板包含色盘、RGB、透明度、亮度、对比度和预设颜色——一套完整的控制系统全量展示。
                  问题是：用户只想改颜色，系统却先让他理解有哪些维度可以调整。
                </p>
                <p>
                  五个迭代方案围绕「颜色面板放在哪里、以什么形式出现」逐步收敛。
                  从右侧独立浮层，到顶部工具栏，再到侧边+顶部组合，
                  最终将颜色调整收进属性编辑体系。
                  逻辑从「颜色工具 → 找对象」变成「选中对象 → 对象属性 → 颜色」。
                </p>
                <div className={styles.narrativeDesignPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>独立浮层 → 属性体系内</strong>：颜色成为对象属性的一部分，而非独立工具</li>
                    <li><strong>全量展示 → 渐进披露</strong>：只在用户触达颜色属性时展示完整控制</li>
                    <li><strong>工具主导 → 对象主导</strong>：先选对象，颜色面板随上下文出现</li>
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
                <p className={styles.iterationCaption}>旧方案：右侧独立浮层</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%882.png"
                  alt="方案2：去掉顶部信息，按钮放中间"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>方案2：去掉顶部信息，按钮放中间</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%883.png"
                  alt="方案3：全部放在顶部"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>方案3：全部放在顶部</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%884.png"
                  alt="方案4：顶部导航改成按钮组"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>方案4：顶部导航改成按钮组</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%96%B9%E6%A1%885.png"
                  alt="方案5：侧边+顶部导航"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationCaption}>方案5：侧边＋顶部导航</p>
              </div>
              <div>
                <Image
                  src="/images/model-editor/%E6%97%A7%E7%9A%84%E6%96%B9%E6%A1%88%E4%BB%AC/%E6%9C%80%E5%90%8E%E6%96%B9%E6%A1%88.png"
                  alt="最终方案：收进属性体系"
                  width={600}
                  height={375}
                  className={styles.iterationImage}
                />
                <p className={styles.iterationFinalCaption}>→ 最终方案：收进属性体系</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Chapter 3: 让模型成为视觉中心 ──────────────── */}
        <div className={styles.chapterIntro}>
          <div className={styles.chapterIntroInner}>
            <span className={styles.chapterIcon}>👁️</span>
            <div>
              <p className={styles.chapterLabel}>Chapter 03</p>
              <h2 className={styles.chapterTitle}>让模型成为视觉中心</h2>
              <p className={styles.chapterDesc}>
                围绕模型预览区域重新分配界面空间，使编辑过程保持连续的实时反馈。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.narrativeSection}>
          <div className={styles.narrativeInner}>
            <div className={styles.narrativeGrid}>
              <h3 className={styles.narrativeHeadline}>
                面板包围模型，<br />还是模型居中
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
            <div className={styles.assetPlaceholder}>
              <span>📐</span>
              <span>布局对比图（待补充）</span>
              <span className={styles.assetPlaceholderLabel}>三栏空间分配与模型视口占比示意</span>
            </div>
          </div>
        </div>

        {/* ─── Design Goals ────────────────────────────────── */}
        <div className={styles.divider}>
          <div className={styles.dividerInner}>
            <div className={styles.dividerTitle}>Design Goals</div>
            <div className={styles.dividerGoals}>
              <p>所见即所得的实时编辑</p>
              <p>零门槛的操作流程</p>
              <p>丰富的预设材质资源</p>
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

        {/* ─── Contact ─────────────────────────────────────── */}
        <div className={styles.contact}>
          <h3>Curious for more details?</h3>
          <p>Reach out and let&apos;s chat! Contact me at</p>
          <a href="mailto:lijaemin1993@gmail.com">lijaemin1993@gmail.com</a>
        </div>

      </main>
    </div>
  );
}
