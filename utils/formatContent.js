export const formatContent = (content) => {
  return content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">
      {paragraph}
    </p>
  ));
};