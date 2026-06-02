import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../project-detail.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ModelBrowserPage({ params }: Props) {
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
          <h1>3D Model Browser</h1>
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
                为教育场景提供高效的 3D 模型资源浏览与预览体验
              </p>
              <p className={styles.overviewBody}>
                3D Model Browser
                是一个面向教育与工业培训场景的模型资源管理工具，支持按学科分类浏览海量
                3D
                模型，并提供实时预览、模型信息查看和快速收藏等功能，帮助用户快速找到所需内容。
              </p>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>My Role</div>
                <p className={styles.roleText}>
                  作为核心体验设计师，负责信息架构设计、交互方案制定和视觉语言构建，与产品及开发团队紧密协作推进落地。
                </p>
              </div>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>Project Achievements</div>
                <p className={styles.roleText}>
                  大幅提升了模型资源的检索效率，用户平均查找时间缩短
                  40%，资源使用率提升显著。
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
                What is{" "}
                <span className={styles.highlight}>3D Model Browser</span>
              </p>
              <p className={styles.lrText}>
                3D Model Browser
                服务于教育平台的模型资源库，提供按学科、类别和标签多维度检索的能力。用户可以在浏览器或平板端快速预览模型的外观、结构和动画效果，无需下载即可评估是否满足教学需求。
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
                &ldquo;找到合适的模型太难了，需要更好的
                <span className={styles.highlight}>分类和预览</span>
                方式&rdquo;
              </p>
              <p className={styles.lrText}>
                访谈了多位教师和课件开发者，核心痛点包括：模型资源难以快速定位、缺少实时预览、分类维度单一不够灵活。
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
                探索 3D 模型资源管理的最佳方案
              </p>
              <p className={styles.lrText}>
                对比了 Sketchfab、TurboSquid 和 Unity Asset Store
                等平台的浏览体验，分析其在分类体系、预览交互和筛选效率方面的优劣。
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
              <p>高效的多维度模型检索</p>
              <p>沉浸式实时 3D 预览</p>
              <p>清晰直观的分类体系</p>
            </div>
          </div>
        </div>

        {/* Solution 1 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Smart Search</div>
            <p className={styles.conceptHeadline}>
              多维度筛选与智能推荐，快速锁定目标模型
            </p>
            <div className={styles.imagePlaceholder}>Smart Search 界面截图</div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>3D Preview</div>
            <p className={styles.conceptHeadline}>
              实时 3D 预览，支持旋转、缩放和动画播放
            </p>
            <div className={styles.imagePlaceholder}>3D Preview 界面截图</div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Category System</div>
            <p className={styles.conceptHeadline}>
              按学科和用途分类，构建清晰的资源导航体系
            </p>
            <div className={styles.imagePlaceholder}>分类体系设计截图</div>
          </div>
        </div>

        {/* Solution 4 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Collection &amp; Export</div>
            <p className={styles.conceptHeadline}>
              一键收藏与导出，无缝衔接课件制作流程
            </p>
            <div className={styles.imagePlaceholder}>收藏与导出功能截图</div>
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
