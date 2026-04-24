import React, { useMemo, useState } from "react";

const addRemoteImageParams = (src, width) => {
  if (!src) {
    return src;
  }

  try {
    const url = new URL(src, window.location.origin);
    const hostname = url.hostname;

    if (hostname.includes("unsplash.com")) {
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("q", "80");

      if (width) {
        url.searchParams.set("w", String(width));
      }
    }

    if (hostname.includes("placehold.co") && width) {
      const pathParts = url.pathname.split("/").filter(Boolean);

      if (pathParts.length > 0) {
        const [currentWidth, currentHeight] = pathParts[0].split("x");
        const nextHeight = currentHeight || currentWidth || width;
        pathParts[0] = `${width}x${nextHeight}`;
        url.pathname = `/${pathParts.join("/")}`;
      }
    }

    return url.href;
  } catch {
    return src;
  }
};

const buildSrcSet = (src, widths) =>
  widths
    .map((width) => {
      const optimizedSrc = addRemoteImageParams(src, width);
      return optimizedSrc ? `${optimizedSrc} ${width}w` : null;
    })
    .filter(Boolean)
    .join(", ");

const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackSrc,
  sizes = "100vw",
  widths = [480, 768, 1200],
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  onError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const resolvedSrc = currentSrc || fallbackSrc || src;

  const srcSet = useMemo(() => {
    if (!resolvedSrc || props.srcSet) {
      return props.srcSet;
    }

    return buildSrcSet(resolvedSrc, widths);
  }, [props.srcSet, resolvedSrc, widths]);

  return (
    <img
      {...props}
      src={addRemoteImageParams(resolvedSrc, widths[widths.length - 1])}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onError={(event) => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }

        onError?.(event);
      }}
    />
  );
};

export default OptimizedImage;
