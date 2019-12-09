const atag = [
{
  "guideline": "UI follows accessibility guidelines",
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
  "guideline": "Editing experience is perceivable ",
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
  "guideline": "Editing experience is operable",
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
  "guideline": "Editing experience is understandable",
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
},
{
  "guideline": "Fully automatic processes produce accessible content ",
  "scs": [
    {
      "id": "auto-content-accessible",
      "name": "Generates accessible markup",
      "description": " When the tool generates markup, that markup is accessible. If accesssibility information is required, like alternative texts, the content editor is prompted to provide that information.",
      "related_atag": ["B.1.1"]
    },
    {
      "id": "accessibility-information-preserved",
      "name": "Preserves accessibility information",
      "description": " If content is pasted from a word processor or converted from one format into another, any accessibility information is preserved.",
      "related_atag": ["B.1.2"]
    }
  ]
},
{
  "guideline": "Supports producing accessible content",
  "scs": [
    {
      "id": "accessible-content-production-possible",
      "name": "Accessible content production is possible",
      "description": "If some options produce more accessible content than others, they are displayed more prominently. If properties and attributes can be set, those relevant for accessibility can also be set.",
      "related_atag": ["B.2.1"]
    },
    {
      "id": "editors-guided",
      "name": "Editors guided",
      "description": "Editors are guided to produce accessible content.",
      "related_atag": ["B.2.2"]
    },
    {
      "id": "alternatives-manageable",
      "name": "Text alternatives can be managed",
      "description": "There is a tool for providing text alternatives to “non-text content”, like images, videos and data visualisation.",
      "related_atag": ["B.2.3"]
    },
    {
      "id": "accessible-templates-available",
      "name": "Accessible templates available",
      "description": " There are accessible templates available. If there is a repository of templates, it is easy to find the ones that prioritise accessibility.",
      "related_atag": ["B.2.4"]
    },
    {
      "id": "accessible-components-available",
      "name": "Accessible components/plug-ins available",
      "description": " If any components or plugins are built-in to the tool, they are accessible. If there is a gallery of components or plug-ins, it indicates accessible options.",
      "related_atag": ["B.2.5"]
    }
  ]
},
{
  "guideline": "Helps with improving the accessibility of existing content",
  "scs": [
    {
      "id": "automatically-checks",
      "name": "Checks accessibility automatically",
      "description": " Has built-in checks for common accessibility problems, for example a check to identify missing alternative text.",
      "related_atag": ["B.3.1"]
    },
    {
      "id": "helps-fix-problems",
      "name": "Helps content editors fix problems",
      "description": " Provides suggestions to content editor about accessibility problems.",
      "related_atag": ["B.3.2"]
    }
  ]
 },
 {
  "guideline": "Promotes and integrates accessibility features",
  "scs": [
    {
      "id": "features-promote-accessibility",
      "name": "Accessibility features prominent",
      "description": "Accessibility features are on by default and a prominent part of the editing workflow. Documentation shows examples of how to create accessible content, for instance with example markup or screenshots.",
      "related_atag": ["B.4.1"]
    },
    {
      "id": "documentation-promotes-accessibility",
      "name": "Documentation promotes accessibility",
      "description": " Provides suggestions to content editor about accessibility problems.",
      "related_atag": ["B.4.2"]
    }
  ] 
}
];

export default atag;