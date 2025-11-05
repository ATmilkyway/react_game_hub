const getCroppedImageUrl = (url: string | null) => {
  const placeholder = "https://placehold.co/600x400";
  if (!url) return placeholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
