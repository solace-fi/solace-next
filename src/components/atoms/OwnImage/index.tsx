import classNames from 'classnames'
import Image from 'next/image'
import styles from './Image.module.css'

// source: https://www.youtube.com/watch?v=P7i5YIJRJew
export default function OwnImage({
  width,
  maxWidth,
  height,
  maxHeight,
  src,
  className,
  alt,
  ...rest
}: {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string
  className?: string
  src: string | StaticImageData | { default: StaticImageData }
  alt: string
}) {
  const widths = {} as { [key: string]: string }
  widths.width = width ?? '100%'
  widths.maxWidth = maxWidth ?? '100%'
  widths.height = height ?? '100%'
  widths.maxHeight = maxHeight ?? '100%'
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <div className={classNames(styles.imageContainer, className)} style={widths}>
      <Image src={src} className={styles.image} {...rest} alt={alt} />
    </div>
  )
}
