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
        {/* Cover */}
        <div className={styles.coverPlaceholder}>Cover Image</div>

        {/* Title */}
        <div className={styles.titleSection}>
          <h1>Model Editor</h1>
          <p className={styles.subtitle}>User Experience Design</p>
        </div>

        {/* Project Overview */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.overviewContent}>
              <div className={styles.overviewLabel}>
                PROJECT <em>OVERVIEW</em>
              </div>
              <p className={styles.overviewHeadline}>
                为 3D 模型提供直观高效的材质、颜色与结构编辑体验
              </p>
              <p className={styles.overviewBody}>
                Model Editor
                是一款面向教育和轻量工业场景的 3D
                模型编辑工具，支持材质替换、颜色调整、结构拆解与爆炸视图等核心功能，让非专业用户也能快速编辑和定制
                3D 模型内容。
              </p>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>My Role</div>
                <p className={styles.roleText}>
                  作为体验设计负责人，主导编辑器的交互流程设计、工具栏布局优化和操作反馈机制设计，确保复杂功能的易用性。
                </p>
              </div>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>Project Achievements</div>
                <p className={styles.roleText}>
                  显著降低了 3D
                  模型编辑的学习门槛，用户上手时间从平均 2
                  小时缩短至 15 分钟，操作完成率提升 65%。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research and Analysis */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>Research and Analysis</span>
            <div className={styles.gridLeftRight}>
              <p className={styles.lrHeadline}>
                What is <span className={styles.highlight}>Model Editor</span>
              </p>
              <p className={styles.lrText}>
                Model Editor
                专注于模型的外观与结构编辑，包含材质库、颜色选择器、结构树视图和爆炸动画编辑器。用户可以在平板或桌面端对已有模型进行定制化修改，满足不同教学场景的展示需求。
              </p>
            </div>
            <div className={styles.imagePlaceholder}>产品概览图</div>
          </div>
        </div>

        {/* User Insights */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>USER INSIGHTS</span>
            <div className={styles.gridLeftRight}>
              <p className={styles.lrHeadline}>
                &ldquo;专业软件太复杂，我只想快速调整
                <span className={styles.highlight}>颜色和材质</span>&rdquo;
              </p>
              <p className={styles.lrText}>
                调研发现用户的核心诉求集中在：操作步骤过多、专业术语难以理解、缺少实时预览反馈、无法快速还原操作。
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imageGridItem}>用户访谈 1</div>
              <div className={styles.imageGridItem}>用户访谈 2</div>
              <div className={styles.imageGridItem}>用户访谈 3</div>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>Competitive Analysis</span>
            <div className={styles.gridLeftRight}>
              <p className={styles.lrHeadline}>
                对比专业建模软件与轻量编辑工具的差异
              </p>
              <p className={styles.lrText}>
                分析了 Blender、SketchUp 和 Vectary
                的编辑体验，专业工具功能强大但上手成本高，轻量工具操作简单但功能受限。我们的目标是在两者间找到平衡。
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imageGridItem}>竞品 1</div>
              <div className={styles.imageGridItem}>竞品 2</div>
              <div className={styles.imageGridItem}>竞品 3</div>
            </div>
          </div>
        </div>

        {/* Design Goals Divider */}
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

        {/* Solution 1 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Material Library</div>
            <p className={styles.conceptHeadline}>
              预设材质一键应用，支持金属、木纹、塑料等常见材质切换
            </p>
            <div className={styles.imagePlaceholder}>材质库界面截图</div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Color Picker</div>
            <p className={styles.conceptHeadline}>
              直观的颜色选择器，支持单部件或批量上色
            </p>
            <div className={styles.imagePlaceholder}>颜色编辑器截图</div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Structure View</div>
            <p className={styles.conceptHeadline}>
              树状结构视图与爆炸动画，清晰展示模型层级关系
            </p>
            <div className={styles.imagePlaceholder}>结构视图与爆炸动画截图</div>
          </div>
        </div>

        {/* Solution 4 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Undo &amp; History</div>
            <p className={styles.conceptHeadline}>
              完整的操作历史与一键还原，让编辑过程无后顾之忧
            </p>
            <div className={styles.imagePlaceholder}>操作历史功能截图</div>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Curious for more details?</h3>
          <p>Reach out and let&apos;s chat! Contact me at</p>
          <a href="mailto:lijaemin1993@gmail.com">lijaemin1993@gmail.com</a>
        </div>
      </main>
    </div>
  );
}
