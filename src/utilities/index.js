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
    alert("Already installed");
  } else {
    storedAppData.push(id);
    const appData = JSON.stringify(storedAppData);
    localStorage.setItem("apps", appData);
  }
};

export { getAppsData, addToStoredApps };
