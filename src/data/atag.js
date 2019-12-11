const atag = [
  {
    principle:
      "Authoring tool user interfaces follow applicable accessibility guidelines",
    guidelines: [
      {
        id: "web-based-accessible",
        atag_id: "A.1.1",
        name: "Ensure that web-based functionality is accessible",
        description:
          "When authoring tools (or parts of authoring tools) are web-based, conforming to WCAG 2.0 will facilitate access by all authors, including those using assistive technologies.",
        scs: [
          {
            id: "web-based-accessible-wcag",
            atag_id: "A.1.1.1",
            name: "Web-Based Accessible (WCAG)",
            description:
              "If the authoring tool contains web-based user interfaces, then those web-based user interfaces meet the WCAG 2.0 success criteria. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
          },
        ],
      },
      {
        id: "non-web-based-accessible",
        name: "Ensure that non-web-based functionality is accessible.",
        description:
          " When authoring tools (or parts of authoring tools) are non-web-based, following existing platform accessibility guidelines and implementing communication with platform accessibility services facilitates access by all authors, including those using assistive technologies.",
        atag_id: "A.1.2",
        scs: [
          {
            id: "non-web-a11y-guidelines",
            atag_id: "A.1.2.1",
            name: "Accessibility Guidelines",
            description:
              "If the authoring tool contains non-web-based user interfaces, then those non-web-based user interfaces follow user interface accessibility guidelines for the platform.",
            level: "A",
          },
          {
            id: "non-web-platform-a11y-services",
            atag_id: "A.1.2.2",
            name: "Platform Accessibility Services",
            description:
              "If the authoring tool contains non-web-based user interfaces, then those non-web-based user interfaces expose accessibility information through platform accessibility services.",
            level: "A",
          },
        ],
      },
    ],
  },
  {
    principle: "Editing-views are perceivable ",
    guidelines: [
      {
        id: "alt-available",
        atag_id: "A.2.1",
        name: "Make alternative content available to authors.",
        description:
          "Some authors require access to alternative content in order to interact with the web content that they are editing.",
        scs: [
          {
            id: "alts-for-non-text",
            atag_id: "A.2.1.1",
            name: "Text Alternatives for Rendered Non-Text Content",
            description:
              "If an editing-view renders non-text content, then any programmatically associated text alternatives for the non-text content can be programmatically determined. (Level A)",
            level: "A",
          },
          {
            id: "alts-for-time-based",
            atag_id: "A.2.1.2",
            name: "Alternatives for Rendered Time-Based Media",
            description:
              "If an editing-view renders time-based media, then at least one of the following is true: (Level A) (a) Option to Render: The authoring tool provides the option to render alternatives for the time-based media; or (b) User Agent Option: Authors have the option to preview the time-based media in a user agent that is able to render the alternatives.",
            level: "A",
          },
        ],
      },
      {
        id: "presentation-programmatically-determined",
        name:
          "Ensure that editing-view presentation can be programmatically determined.",
        description:
          " Some authors need access to details about the editing-view presentation, via their assistive technology, when that presentation is used to convey status messages (e.g. underlining misspelled words) or provide information about how the end user will experience the web content being edited.",
        atag_id: "A.2.2",
        scs: [
          {
            id: "editing-view-status-indicators",
            atag_id: "A.2.2.1",
            name: "Editing-View Status Indicators",
            description:
              "If an editing-view adds status indicators to the content being edited, then the information being conveyed by the status indicators can be programmatically determined.",
            level: "A",
          },
          {
            id: "access-rendered-text-props",
            atag_id: "A.2.2.2",
            name: "Access to Rendered Text Properties",
            description:
              "If an editing-view renders any text formatting properties that authors can also edit using the editing-view, then the properties can be programmatically determined.",
            level: "AA",
          },
        ],
      },
    ],
  },
  {
    principle: "Editing-views are operable",
    guidelines: [
      {
        id: "works-with-keyboard",
        atag_id: "A.3.1",
        name: "Provide keyboard access to authoring features.",
        description:
          "Some authors with limited mobility or visual disabilities do not use a mouse and instead require keyboard interface access to all of the functionality of the authoring tool.",
        scs: [
          {
            id: "keyboard-access-minimum",
            atag_id: "A.3.1.1",
            name: "Keyboard Access (Minimum)",
            description:
              "All functionality of the authoring tool is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
            level: "A",
          },
          {
            id: "no-keyboard-traps",
            atag_id: "A.3.1.2",
            name: "No Keyboard Traps",
            description:
              "If keyboard focus can be moved to a component using a keyboard interface, then focus can be moved away from that component using only a keyboard interface. If it requires more than unmodified arrow or tab keys or other standard exit methods, authors are advised of the method for moving focus away.",
            level: "A",
          },
          {
            id: "efficient-keyboard-access",
            atag_id: "A.3.1.3",
            name: "Efficient Keyboard Access",
            description:
              "The authoring tool user interface includes mechanisms to make keyboard access more efficient than sequential keyboard access.",
            level: "AA",
          },
        ],
      },
      {
        id: "enough-time",
        atag_id: "A.3.2",
        name: "Provide authors with enough time.",
        description:
          "Some authors who have difficulty typing, operating the mouse, or processing information can be prevented from using systems with short time limits or that require fast reaction speeds, such as clicking on a moving target.",
        scs: [
          {
            id: "auto-save-minimum",
            atag_id: "A.3.2.1",
            name: "Auto-Save (minimum)",
            description:
              "The authoring tool does not include session time limits or the authoring tool can automatically save edits made before the session time limits are reached.",
            level: "A",
          },
          {
            id: "timing-adjustable",
            atag_id: "A.3.2.2",
            name: "Timing Adjustable",
            description:
              'The authoring tool does not include time limits or at least one of the following is true: (a) Turn Off: Authors are allowed to turn off the time limit before encountering it; or (b) Adjust: Authors are allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or (c) Extend: Authors are warned before time expires and given at least 20 seconds to extend the time limit with a simple action (e.g. "press the space bar"), and authors are allowed to extend the time limit at least ten times; or (d) Real-time Exception: The time limit is a required part of a real-time event (e.g. a collaborative authoring system), and no alternative to the time limit is possible; or (e) Essential Exception: The time limit is essential and extending it would invalidate the activity; or (f) 20 Hour Exception: The time limit is longer than 20 hours.',
            level: "A",
          },
          {
            id: "static-input-components",
            atag_id: "A.3.2.3",
            name: "Static Input Components",
            description:
              "The authoring tool does not include moving user interface components that accept input where the movement of these components cannot be paused by authors. ",
            level: "A",
          },
        ],
      },
      {
        id: "flashing-optional",
        atag_id: "A.3.3",
        name: "Help authors avoid flashing that could cause seizures",
        description:
          "Flashing can cause seizures in authors with photosensitive seizure disorder.",
        scs: [
          {
            id: "static-view-option",
            atag_id: "A.3.3.1",
            name: "Static View Option",
            description:
              "If an editing-view can play visual time-based content, then playing is not necessarily automatic upon loading the content and playing can be paused.",
            level: "A",
          },
        ],
      },
      {
        id: "enhance-navigation-via-structure",
        name: "Enhance navigation and editing via content structure. ",
        description:
          "Some authors who have difficulty typing or operating the mouse benefit when authoring tools make use of the structure present in web content to simplify navigating and editing the content.",
        atag_id: "A.3.4",
        scs: [
          {
            id: "navigate-by-structure",
            atag_id: "A.3.4.1",
            name: "Navigate by structure",
            description:
              "If editing-views expose the markup elements in the web content being edited, then the markup elements (e.g. source code, content renderings) are selectable and navigation mechanisms are provided to move the selection focus between elements.",
            level: "AA",
          },
        ],
      },
      {
        id: "content-searchable",
        name: "Provide text search of the content.",
        description:
          "Some authors who have difficulty typing or operating the mouse benefit from the ability to use text search to navigate to arbitrary points within the web content being edited.",
        atag_id: "A.3.5",
        scs: [
          {
            id: "text-search",
            atag_id: "A.3.5.1",
            name: "Text Search",
            description:
              "If the authoring tool provides an editing-view of text-based content, then the editing-view enables text search, such that all of the following are true: (a) All Editable Text: Any text content that is editable by the editing-view is searchable (including alternative content); and (b) Match: Matching results can be presented to authors and given focus; and (c) No Match: Authors are informed when no results are found; and (d) Two-way: The search can be made forwards or backwards.",
            level: "AA",
          },
        ],
      },
      {
        id: "supports-display-prefs",
        atag_id: "A.3.6",
        name: "Manage preference settings",
        description:
          "Some authors need to set their own display settings in a way that differs from the presentation that they want to define for the published web content. Providing the ability to save and reload sets of keyboard and display preference settings benefits authors who have needs that differ over time (e.g. due to fatigue).",
        scs: [
          {
            id: "independence-of-display",
            atag_id: "A.3.6.1",
            name: "Independence of Display",
            description:
              "If the authoring tool includes display settings for editing-views, then the authoring tool allows authors to adjust these settings without modifying the web content being edited.",
            level: "A",
          },
          {
            id: "save-settings",
            atag_id: "A.3.6.2",
            name: "Save Settings",
            description:
              "If the authoring tool includes display and/or control settings, then these settings can be saved between authoring sessions.",
            level: "AA",
          },
          {
            id: "apply-platform-settings",
            atag_id: "A.3.6.3",
            name: "Apply Platform Settings",
            description:
              "The authoring tool respects changes in platform display and control settings, unless authors select more specific display and control settings using the authoring tool.",
            level: "AA",
          },
        ],
      },
      {
        id: "previews-accessible",
        atag_id: "A.3.7",
        name:
          "Ensure that previews are at least as accessible as in-market user agents.",
        description:
          "Preview features are provided by many authoring tools because the workflow of authors often includes periodically checking how user agents will display the web content to end users. Authors with disabilities need the same opportunity to check their work.",
        scs: [
          {
            id: "preview-minimum",
            atag_id: "A.3.7.1",
            name: "Preview (Minimum)",
            description:
              "If a preview is provided, then at least one of the following is true: (a) In-Market User Agent: The preview renders content using a user agent that is in-market; or (b) UAAG (Level A): The preview conforms to the User Agent Accessibility Guidelines 1.0 Level A",
            level: "A",
          },
        ],
      },
    ],
  },
  {
    principle: "Editing-views are understandable",
    guidelines: [
      {
        id: "prevent-mistakes",
        atag_id: "A.4.1",
        name: "Help authors avoid and correct mistakes.",
        description:
          "All authoring actions are either reversible or the authoring tool requires author confirmation to proceed.",
        scs: [
          {
            id: "content-changes-reversible",
            atag_id: "A.4.1.1",
            name: "Content Changes Reversible (Minimum)",
            description:
              "All authoring actions are either reversible or the authoring tool requires author confirmation to proceed.",
            level: "A",
          },
          {
            id: "settings-change-confirm",
            atag_id: "A.4.1.2",
            name: "Settings Change Confirmation",
            description:
              "If the authoring tool provides mechanisms for changing authoring tool user interface settings, then those mechanisms can reverse the setting changes, or the authoring tool requires author confirmation to proceed. ",
            level: "A",
          },
        ],
      },
      {
        id: "features-documented",
        name:
          "Document the user interface, including all accessibility features.",
        description:
          "Some authors may not be able to understand or operate the authoring tool user interface without documentation.",
        atag_id: "A.4.2",
        scs: [
          {
            id: "describe-features",
            atag_id: "A.4.2.1",
            name: "Describe Accessibility Features",
            description:
              "For each authoring tool feature that is used to meet Part A of ATAG 2.0, at least one of the following is true: (a) Described in the Documentation: Use of the feature is explained in the authoring tool's documentation; or (b) Described in the Interface: Use of the feature is explained in the authoring tool user interface; or (c) Platform Service: The feature is a service provided by an underlying platform; or (d) Not Used by Authors: The feature is not used directly by authors (e.g. passing information to a platform accessibility service).",
            level: "A",
          },
          {
            id: "document-all-features",
            atag_id: "A.4.2.2",
            name: "Document All Features",
            description:
              "For each authoring tool feature, at least one of the following is true:  (a) Described in the Documentation: Use of the feature is explained in the authoring tool's documentation; or (b) Described in the Interface: Use of the feature is explained in the authoring tool user interface; or (c) Platform Service: The feature is a service provided by an underlying platform; or (d) Not Used by Authors: The feature is not used directly by authors (e.g. passing information to a platform accessibility service).",
            level: "AA",
          },
        ],
      },
    ],
  },
  {
    principle: "Fully automatic processes produce accessible content ",
    guidelines: [
      {
        id: "auto-content-accessible",
        name: "Generates accessible markup",
        description:
          " When the tool generates markup, that markup is accessible. If accesssibility information is required, like alternative texts, the content editor is prompted to provide that information.",
        atag_id: "B.1.1",
      },
      {
        id: "accessibility-information-preserved",
        name: "Preserves accessibility information",
        description:
          " If content is pasted from a word processor or converted from one format into another, any accessibility information is preserved.",
        atag_id: "B.1.2",
      },
    ],
  },
  {
    principle: "Supports producing accessible content",
    guidelines: [
      {
        id: "accessible-content-production-possible",
        name: "Accessible content production is possible",
        description:
          "If some options produce more accessible content than others, they are displayed more prominently. If properties and attributes can be set, those relevant for accessibility can also be set.",
        atag_id: "B.2.1",
      },
      {
        id: "editors-guided",
        name: "Editors guided",
        description: "Editors are guided to produce accessible content.",
        atag_id: "B.2.2",
      },
      {
        id: "alternatives-manageable",
        name: "Text alternatives can be managed",
        description:
          "There is a tool for providing text alternatives to “non-text content”, like images, videos and data visualisation.",
        atag_id: "B.2.3",
      },
      {
        id: "accessible-templates-available",
        name: "Accessible templates available",
        description:
          " There are accessible templates available. If there is a repository of templates, it is easy to find the ones that prioritise accessibility.",
        atag_id: "B.2.4",
      },
      {
        id: "accessible-components-available",
        name: "Accessible components/plug-ins available",
        description:
          " If any components or plugins are built-in to the tool, they are accessible. If there is a gallery of components or plug-ins, it indicates accessible options.",
        atag_id: "B.2.5",
      },
    ],
  },
  {
    principle: "Helps with improving the accessibility of existing content",
    guidelines: [
      {
        id: "automatically-checks",
        name: "Checks accessibility automatically",
        description:
          " Has built-in checks for common accessibility problems, for example a check to identify missing alternative text.",
        atag_id: "B.3.1",
      },
      {
        id: "helps-fix-problems",
        name: "Helps content editors fix problems",
        description:
          " Provides suggestions to content editor about accessibility problems.",
        atag_id: "B.3.2",
      },
    ],
  },
  {
    principle: "Promotes and integrates accessibility features",
    guidelines: [
      {
        id: "features-promote-accessibility",
        name: "Accessibility features prominent",
        description:
          "Accessibility features are on by default and a prominent part of the editing workflow. Documentation shows examples of how to create accessible content, for instance with example markup or screenshots.",
        atag_id: "B.4.1",
      },
      {
        id: "documentation-promotes-accessibility",
        name: "Documentation promotes accessibility",
        description:
          " Provides suggestions to content editor about accessibility problems.",
        atag_id: "B.4.2",
      },
    ],
  },
];

export default atag;
