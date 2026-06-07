import styles from "../[slug]/project.module.css";

type Selfly0PhoneVideoSlotProps = {
  src: string;
  ariaLabel: string;
};

export function Selfly0PhoneVideoSlot({ src, ariaLabel }: Selfly0PhoneVideoSlotProps) {
  return (
    <div className={styles.selfly0PhoneSlotStage}>
      <div className={styles.selfly0PhoneSlotShell}>
        <video
          className={styles.selfly0PhoneSlotVideo}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}
