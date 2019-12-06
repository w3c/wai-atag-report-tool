const atag_a = [{
  "guideline": "The authoring tool user interface follows applicable accessibility guidelines",
  "scs": [
    {
      "id": "web-based-accessible",
      "name": "Web-based functionality is accessible",
      "description": "The full editing experience conforms to WCAG 2.0 (or other accessibility guidelines).",
      "related_atag": ["A.1.1"]
    },
    {
      "id": "non-web-based-accessible",
      "name": "Non-web-based functionality is accessible",
      "description": "If the interface is not on the web, it conforms to platform-specific accessibility guidelines.",
      "related_atag": ["A.1.2"]
    }
  ]
  },
  {
  "guideline": "Editing-views are perceivable ",
  "scs": [
    {
      "id": "alt-available",
      "name": "Alternative content available to editors",
      "description": "If there is anything visible that is not text, like icons, images or video, there is alternative text available.",
      "related_atag": ["A.2.1"]
    },
    {
      "id": "presentation-programmatically-determined",
      "name": "Editing-view presentation can be programmatically determined",
      "description": "Status indicators (like changes or spelling errors) and text properties (like italics or bold) are conveyed to users of assistive technologies.",
      "related_atag": ["A.2.2"]
    }
  ]
  },
  {  
  "guideline": "Editing-views are operable",
  "scs": [
    {
      "id": "works-with-keyboard",
      "name": "Works with keyboard",
      "description": "Everything that can be done with a mouse, can just as easily be done with a keyboard, including drag and drop and drawing capabilities. There should be no keyboard traps. Keyboard usage should be efficient and easier to use than just with sequential access (for example: use WAI-ARIA landmarks or offer keyboard shortcuts).",
      "related_atag": ["A.3.1"]
    },
    {
      "id": "enough-time",
      "name": "Enough time",
      "description": "Time limits in the editor, like for auto-save, can be turned off or extended (some exceptions apply).",
      "related_atag": ["A.3.2"]
    },
    {
      "id": "flashing-optional",
      "name": "Flashing content optional",
      "description": "Flashing content, like videos, including previews of that kind of content, can be paused or turned off.",
      "related_atag": ["A.3.3"]
    },
    {
      "id": "navigate-by-structure",
      "name": "Content can be navigated by structure",
      "description": "Users can navigate quicker by structure, for example headings, lists or HTML elements.",
      "related_atag": ["A.3.4"]
    },
    {
      "id": "content-searchable",
      "name": "Content searchable",
      "description": "Users can search in text content, results are focused when shown. If there are no matches, this is indicated. User can search in two directions (backwards and forwards).",
      "related_atag": ["A.3.5"]
    },
    {
      "id": "supports-display-prefs",
      "name": "Supports display preferences",
      "description": "If there are user settings for display, this only affects the editing view, not the output. If a content editor uses OS settings like high contrast mode or their own stylesheet, this does not break the editing experience.",
      "related_atag": ["A.3.6"]
    },
    {
      "id": "previews-accessible",
      "name": "Previews are accessible",
      "description": "When the tool shows a preview of the content, that preview is at least as accessible as in current browsers and other user agents.",
      "related_atag": ["A.3.7"]
    }
  ]
  },
  {
  "guideline": "Editing-views are understandable",
  "scs": [
    {
      "id": "prevent-mistakes",
      "name": "Helps editor prevent and correct mistakes",
      "description": "Lets users undo changes and settings.",
      "related_atag": ["A.4.1"]
    },
    {
      "id": "features-documented",
      "name": "(Accessibility) features documented",
      "description": "Documents all features, including accessibility features.",
      "related_atag": ["A.4.2"]
    }
  ]
}];

export default atag_a;