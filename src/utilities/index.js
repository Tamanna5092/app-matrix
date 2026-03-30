import toast from "react-hot-toast";

const getAppsData = () => {
  const storedAppsDataSTR = localStorage.getItem("apps");
  if (storedAppsDataSTR) {
    const storedAppsData = JSON.parse(storedAppsDataSTR);
    return storedAppsData;
  } else {
    return [];
  }
};

const addToStoredApps = (id) => {
  const storedAppData = getAppsData();
  if (storedAppData.includes(id)) {
    toast.error(`This app is already installed`);
  } else {
    storedAppData.push(id);
    const appData = JSON.stringify(storedAppData);
    localStorage.setItem("apps", appData);
    toast.success("App in installing")
  }
};

export { getAppsData, addToStoredApps };
