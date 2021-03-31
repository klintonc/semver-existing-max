'use strict';

const axios = require('axios');
const semver = require('semver');
const semverMax = require('semver-max');

// GET all the versions of given dependency
const versionList = async (dependency) => {
  try {
    const response = await axios({
      url: `https://registry.npmjs.cf/${dependency}`,
    });

    return Object.keys(response.data.versions);
  } catch (error) {
    return null;
  }
};

const semverExistingMax = async (dependency, rangeVersion) => {
  let versions;

  if (typeof dependency === 'string') versions = await versionList(dependency);
  else versions = dependency;

  if (versions) {
    const extractedRangeVersion = versions.filter((version) => {
      if (semver.intersects(version, rangeVersion)) return true;
      return false;
    });

    if (extractedRangeVersion.length > 0) {
      const maxVersion = extractedRangeVersion.reduce(semverMax);
      return maxVersion;
    }
  }

  return null;
};

module.exports = semverExistingMax;
