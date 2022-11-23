const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Recycle Clothes`;
  }, [title]);
};

export default useTitle;
