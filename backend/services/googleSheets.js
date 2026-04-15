const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbzfxI5ajmcmnrCWAsItCdVtcPT-6-uLEUdoUX8UkfMcV5VaMDhDcK2XwNsErhj2vOCLFw/exec';

const SHEET_NAMES = {
  contact: 'Contacts',
  enrollment: 'Enrollments',
  subscriber: 'Subscribers',
};

async function sendToGoogleSheet(type, payload) {
  const sheetName = SHEET_NAMES[type];

  if (!sheetName) {
    throw new Error(`Unsupported sheet type: ${type}`);
  }

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sheetName,
      payload,
    }),
  });

  const rawText = await response.text();

  let data;
  try {
    data = rawText ? JSON.parse(rawText) : {};
  } catch (error) {
    data = { success: response.ok, message: rawText };
  }

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Google Sheets request failed');
  }

  return data;
}

module.exports = {
  GOOGLE_SCRIPT_URL,
  sendToGoogleSheet,
};
