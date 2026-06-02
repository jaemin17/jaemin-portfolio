import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../project-detail.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SyncSpacePage({ params }: Props) {
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
          <h1>Sync Space</h1>
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
                多端协同的 XR 课堂管理与设备互联方案
              </p>
              <p className={styles.overviewBody}>
                Sync Space
                是一个多端课堂协同平台，支持教师端、学生端和 VR
                头盔的实时同步。教师可以统一管理课堂内容分发、监控学生设备状态，并实现多人同时体验同一
                XR 内容的沉浸式教学场景。
              </p>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>My Role</div>
                <p className={styles.roleText}>
                  作为体验设计负责人，主导多端交互一致性设计、设备连接流程优化和课堂管理界面的信息架构设计。
                </p>
              </div>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>Project Achievements</div>
                <p className={styles.roleText}>
                  实现了教师一键控制 30+
                  台设备同步的能力，课堂准备时间从 15 分钟缩短至 2
                  分钟，设备连接成功率提升至 98%。
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
                What is <span className={styles.highlight}>Sync Space</span>
              </p>
              <p className={styles.lrText}>
                Sync Space
                解决了 XR
                课堂中多设备协同的痛点。教师通过一个控制面板即可完成内容下发、进度同步、设备监控和学生互动管理，打通了平板、PC
                和 VR 头盔之间的体验壁垒。
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
                &ldquo;管理这么多设备太混乱了，需要
                <span className={styles.highlight}>一个中心控制台</span>&rdquo;
              </p>
              <p className={styles.lrText}>
                通过课堂观察和教师访谈发现：设备连接步骤繁琐、无法实时掌握学生进度、内容分发需要逐台操作、网络不稳定时缺乏降级方案。
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imageGridItem}>课堂观察 1</div>
              <div className={styles.imageGridItem}>课堂观察 2</div>
              <div className={styles.imageGridItem}>课堂观察 3</div>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>Competitive Analysis</span>
            <div className={styles.gridLeftRight}>
              <p className={styles.lrHeadline}>
                对比课堂管理与多端协同解决方案
              </p>
              <p className={styles.lrText}>
                调研了 ClassVR、Google Expeditions 和 VIVE Business
                的多端管理方案，分析其在设备管理、内容同步和教师控制体验方面的优劣。
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
              <p>一键连接多台设备</p>
              <p>实时同步课堂内容</p>
              <p>清晰的设备与学生状态总览</p>
            </div>
          </div>
        </div>

        {/* Solution 1 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Device Connection</div>
            <p className={styles.conceptHeadline}>
              自动发现与一键配对，简化多设备连接流程
            </p>
            <div className={styles.imagePlaceholder}>设备连接界面截图</div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Content Sync</div>
            <p className={styles.conceptHeadline}>
              教师端统一下发内容，所有设备实时同步播放
            </p>
            <div className={styles.imagePlaceholder}>内容同步功能截图</div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Dashboard</div>
            <p className={styles.conceptHeadline}>
              课堂仪表盘实时显示每位学生的设备状态和学习进度
            </p>
            <div className={styles.imagePlaceholder}>课堂仪表盘截图</div>
          </div>
        </div>

        {/* Solution 4 */}
        <div className={styles.conceptSection}>
          <div className={styles.conceptInner}>
            <div className={styles.conceptLabel}>Multi-platform</div>
            <p className={styles.conceptHeadline}>
              横跨平板、PC 和 VR 头盔的一致体验设计
            </p>
            <div className={styles.imagePlaceholder}>多端适配设计截图</div>
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
