import { appendSheetValues, fetchMultipleSheets, updateSheetValues } from './googleSheetsService';

const SHEETS = {
  EVENT_INDEX: 'EventIndex!A1:Z',
  EVENT_RESPONSES: 'EventResponses!A1:Z',
};

/**
 * Fetches event details including responses
 * @param {string} eventId - Event ID
 * @returns {Promise<Object>} Event details and responses
 */
export async function fetchEventDetails(eventId) {
  try {
    const [indexData, responsesData] = await fetchMultipleSheets([
      `${SHEETS.EVENT_INDEX}`,
      `${SHEETS.EVENT_RESPONSES}`,
    ]);

    // Process event details from index
    const headers = indexData.values[0];
    const eventRow = indexData.values.find((row) => row[0] === eventId);

    if (!eventRow) throw new Error('Event not found');

    const eventDetails = headers.reduce((obj, header, index) => {
      obj[header.toLowerCase()] = eventRow[index];
      return obj;
    }, {});

    // Process responses
    const responseHeaders = responsesData.values[0];
    const responses = responsesData.values
      .slice(1)
      .filter((row) => row[0] === eventId)
      .map((row) => {
        return responseHeaders.reduce((obj, header, index) => {
          obj[header.toLowerCase()] = row[index];
          return obj;
        }, {});
      });

    return {
      ...eventDetails,
      responses,
    };
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
}

/**
 * Updates an event response
 * @param {string} eventId - Event ID
 * @param {string} userId - User ID
 * @param {string} response - Response (YES/NO/MAYBE)
 * @returns {Promise<Object>} Update result
 */
export async function updateEventResponse(eventId, userId, response) {
  try {
    const timestamp = new Date().toISOString();
    const values = [[eventId, userId, response, timestamp]];

    // First check if response exists
    const [responsesData] = await fetchMultipleSheets([SHEETS.EVENT_RESPONSES]);
    const existingResponseIndex = responsesData.values.findIndex(
      (row) => row[0] === eventId && row[1] === userId
    );

    if (existingResponseIndex > 0) {
      // Update existing response
      const range = `EventResponses!A${existingResponseIndex + 1}:D${existingResponseIndex + 1}`;
      return updateSheetValues(range, values);
    } else {
      // Append new response
      return appendSheetValues('EventResponses!A:D', values);
    }
  } catch (error) {
    console.error('Error updating event response:', error);
    throw error;
  }
}

/**
 * Fetches all upcoming events
 * @returns {Promise<Array>} Array of upcoming events
 */
export async function fetchUpcomingEvents() {
  try {
    const [indexData] = await fetchMultipleSheets([SHEETS.EVENT_INDEX]);
    const headers = indexData.values[0];

    const events = indexData.values
      .slice(1)
      .filter((row) => {
        const eventDate = new Date(row[headers.indexOf('Date')]);
        return eventDate >= new Date();
      })
      .map((row) => {
        return headers.reduce((obj, header, index) => {
          obj[header.toLowerCase()] = row[index];
          return obj;
        }, {});
      });

    return events;
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    throw error;
  }
}

/**
 * Fetches past events
 * @param {number} limit - Number of past events to fetch
 * @returns {Promise<Array>} Array of past events
 */
export async function fetchPastEvents(limit = 10) {
  try {
    const [indexData] = await fetchMultipleSheets([SHEETS.EVENT_INDEX]);
    const headers = indexData.values[0];

    const events = indexData.values
      .slice(1)
      .filter((row) => {
        const eventDate = new Date(row[headers.indexOf('Date')]);
        return eventDate < new Date();
      })
      .sort((a, b) => {
        const dateA = new Date(a[headers.indexOf('Date')]);
        const dateB = new Date(b[headers.indexOf('Date')]);
        return dateB - dateA;
      })
      .slice(0, limit)
      .map((row) => {
        return headers.reduce((obj, header, index) => {
          obj[header.toLowerCase()] = row[index];
          return obj;
        }, {});
      });

    return events;
  } catch (error) {
    console.error('Error fetching past events:', error);
    throw error;
  }
}
