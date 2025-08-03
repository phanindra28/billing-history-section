export default function Download({ downloadUrl }) {
  const handleDownload = async () => {
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const fileName = downloadUrl.split("/").pop();
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName; // Desired file name
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      className={"font-semibold"}
      onClick={handleDownload}
      style={{ color: "#5C51D1" }}
    >
      Download
    </button>
  );
}
