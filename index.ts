import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()

console.log("initiating...");

const API_KEY = process.env.API_KEY;
const TOKEN = process.env.TOKEN;

const BASE_URL = "https://api.murf.ai";
const AUTHENTICATE = "v1/auth/token";

const LIST_VOICES = "v1/speech/voices";
const GENERATE_SPEECH = "v1/speech/generate";

const authenticate = async () => {
    const { data } = await axios.get(`${BASE_URL}/${AUTHENTICATE}`, {
       headers: {
        "api-key": API_KEY,
       }
    });
    console.log('file: index.ts ~ line 19 ~ result', data);
    // example response
    //  {
    //     token: 'eyJ0eXAiOiJKV1QsdfdAwODY0LCJtYXhDb25jdXJyZW5jeSI6NX0.0mfZRxjr6wf7eNAnqD-yDasz1Rtc6HnfPyX_CmbQPmw',
    //     expiryInEpochMillis: 1668100864658
    //   }
    return;
};

const generateSpeech = async () => {
    const payload = {
        "voiceId": "en-US-julie",
        // "style": "Luxury",
        "text": "Hey, this is very much new to this Space of Complexity!",
        // "rate": 0,
        // "pitch": 0,
        // "sampleRate": 24000,
        // "format": "WAV",
        // "channelType": "MONO",
        // "pronunciationDictionary": {}
      };
    const { data } = await axios.post(`${BASE_URL}/${GENERATE_SPEECH}`, payload, {
        headers: {
            token: TOKEN,
        }
    });
    console.log('file: index.ts ~ line 19 ~ result', data);

};

// provides 32 voices
// try voices here: https://murf.ai/text-to-speech#high-quality-voices-section
const listVoices = async () => {

const { data } = await axios.get(`${BASE_URL}/${LIST_VOICES}`, {
    headers: {
        token: TOKEN,
    }
});
console.log('file: index.ts ~ line 38 ~ data', data);
// example response
// [
//     {
//       voiceId: 'en-US-julie',
//       displayName: 'Julie (F)',
//       locale: 'en-US',
//       displayLanguage: 'English',
//       accent: 'US & Canada',
//       description: 'Middle-Aged',
//       gender: 'Female',
//       availableStyles: [ 'Conversational', 'Cheerful' ]
//     },
//     {
//       voiceId: 'en-US-iris',
//       displayName: 'Iris (F)',
//       locale: 'en-US',
//       displayLanguage: 'English',
//       accent: 'US & Canada',
//       description: 'Young Adult',
//       gender: 'Female',
//       availableStyles: null
//     },
// {
//     voiceId: 'en-US-claire',
//     displayName: 'Claire (F)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Middle-Aged',
//     gender: 'Female',
//     availableStyles: [ 'Conversational', 'Luxury' ]
//   },
//   {
//     voiceId: 'en-US-brianna',
//     displayName: 'Brianna (F)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Female',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-UK-theo',
//     displayName: 'Theo (M)',
//     locale: 'en-UK',
//     displayLanguage: 'English',
//     accent: 'UK',
//     description: 'Young Adult',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-UK-aiden',
//     displayName: 'Aiden (M)',
//     locale: 'en-UK',
//     displayLanguage: 'English',
//     accent: 'UK',
//     description: 'Middle-Aged',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-US-ronnie',
//     displayName: 'Ronnie (M)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-AU-jimm',
//     displayName: 'Jimm (M)',
//     locale: 'en-AU',
//     displayLanguage: 'English',
//     accent: 'Australia',
//     description: 'Young Adult',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-US-ryan',
//     displayName: 'Ryan (M)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-US-edmund',
//     displayName: 'Edmund (M)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Male',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-US-natalie',
//     displayName: 'Natalie (F)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Female',
//     availableStyles: null
//   },
//   {
//     voiceId: 'en-US-michelle',
//     displayName: 'Michelle (F)',
//     locale: 'en-US',
//     displayLanguage: 'English',
//     accent: 'US & Canada',
//     description: 'Young Adult',
//     gender: 'Female',
//     availableStyles: null
//   }
// ];
};

listVoices();




