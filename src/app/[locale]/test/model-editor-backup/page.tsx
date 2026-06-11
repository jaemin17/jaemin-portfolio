import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../../projects/project-detail.module.css";

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
        <video
          className={styles.coverVideo}
          src="/videos/model-editor/basic-controls.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

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
                面向教学演示的 3D 模型预处理工具
              </p>
              <p className={styles.overviewBody}>
                Model Editor 是 3D
                课件制作流程中的模型编辑工具，主要用于在模型插入 PPT /
                XRPPT
                前完成预处理。它帮助缺少建模基础的中高职教师，对模型进行材质调整、结构拆解、显隐控制和动画设置，将原始
                3D 模型整理成更适合课堂讲解的展示状态。
              </p>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>My Role</div>
                <p className={styles.roleText}>
                  作为体验设计负责人，我将早期较为概括的功能需求转化为完整的编辑器体验方案，独立完成核心功能的交互设计、界面布局和视觉
                  UI。通过梳理材质、颜色、结构、显隐、动画等操作链路，让复杂的
                  3D 模型编辑能力以更直观的方式呈现给用户。
                </p>
              </div>

              <div className={styles.roleBlock}>
                <div className={styles.roleLabel}>Project Achievements</div>
                <p className={styles.roleText}>
                  项目降低了中高职教师使用 3D
                  内容进行教学的门槛，让没有建模和模型编辑基础的教师，也能通过简单的编辑、拆解、显隐和动画操作，将复杂结构转化为更直观的课堂讲解内容。
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


        {/* Solution 3 */}
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

        {/* Solution 4 */}
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

        {/* Solution 5 */}
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

        {/* Solution 6 */}
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
