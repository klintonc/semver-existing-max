import semver from 'semver';

const NPM_REGISTRY_URL = 'https://registry.npmjs.org';

const getAllVersions = async (packageName: string) => {
  const response = await fetch(`${NPM_REGISTRY_URL}/${packageName}`);
  if (!response.ok) return null;

  const data = await response.json();
  return Object.keys(data.versions);
};

const semverExistingMax = async (dependency: string | string[], rangeVersion: string) => {
  let versions: string[] | null = null;

  if (typeof dependency === 'string') versions = await getAllVersions(dependency);
  else versions = dependency;

  if (!versions) return null;

  const intersectVersions = versions.filter((version) => semver.intersects(version, rangeVersion));
  const validVersions = intersectVersions.filter((version) => semver.valid(version));
  if (validVersions.length === 0) return null;

  const maxVersion = validVersions.reduce((max, version) => (semver.gt(version, max) ? version : max));
  return maxVersion;
};

export default semverExistingMax;
