const atag = [
  {
    principle: {
      handle: "Accessibility Gudelines",
      text:
        "Authoring tool user interfaces follow applicable accessibility guidelines",
      num: "A.1",
    },
    guidelines: [
      {
        id: "web-based-accessible",
        num: "A.1.1",
        handle: "Ensure that web-based functionality is accessible",
        text:
          "When authoring tools (or parts of authoring tools) are web-based, conforming to WCAG 2.0 will facilitate access by all authors, including those using assistive technologies.",
        successcriteria: [
          {
            id: "web-based-accessible-wcag",
            num: "A.1.1.1",
            handle: "Web-Based Accessible (WCAG)",
            text:
              "If the authoring tool contains web-based user interfaces, then those web-based user interfaces meet the WCAG 2.0 success criteria. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
          },
        ],
      },
      {
        id: "non-web-based-accessible",
        handle: "Ensure that non-web-based functionality is accessible.",
        text:
          " When authoring tools (or parts of authoring tools) are non-web-based, following existing platform accessibility guidelines and implementing communication with platform accessibility services facilitates access by all authors, including those using assistive technologies.",
        num: "A.1.2",
        successcriteria: [
          {
            id: "non-web-a11y-guidelines",
            num: "A.1.2.1",
            handle: "Accessibility Guidelines",
            text:
              "If the authoring tool contains non-web-based user interfaces, then those non-web-based user interfaces follow user interface accessibility guidelines for the platform.",
            level: "A",
          },
          {
            id: "non-web-platform-a11y-services",
            num: "A.1.2.2",
            handle: "Platform Accessibility Services",
            text:
              "If the authoring tool contains non-web-based user interfaces, then those non-web-based user interfaces expose accessibility information through platform accessibility services.",
            level: "A",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "UI perceivable",
      text: "Editing-views are perceivable",
      num: "A.2",
    },
    guidelines: [
      {
        id: "alt-available",
        num: "A.2.1",
        handle: "Make alternative content available to authors.",
        text:
          "Some authors require access to alternative content in order to interact with the web content that they are editing.",
        successcriteria: [
          {
            id: "alts-for-non-text",
            num: "A.2.1.1",
            handle: "Text Alternatives for Rendered Non-Text Content",
            text:
              "If an editing-view renders non-text content, then any programmatically associated text alternatives for the non-text content can be programmatically determined. (Level A)",
            level: "A",
          },
          {
            id: "alts-for-time-based",
            num: "A.2.1.2",
            handle: "Alternatives for Rendered Time-Based Media",
            text:
              "If an editing-view renders time-based media, then at least one of the following is true: (Level A) (a) Option to Render: The authoring tool provides the option to render alternatives for the time-based media; or (b) User Agent Option: Authors have the option to preview the time-based media in a user agent that is able to render the alternatives.",
            level: "A",
          },
        ],
      },
      {
        id: "presentation-programmatically-determined",
        handle:
          "Ensure that editing-view presentation can be programmatically determined.",
        text:
          " Some authors need access to details about the editing-view presentation, via their assistive technology, when that presentation is used to convey status messages (e.g. underlining misspelled words) or provide information about how the end user will experience the web content being edited.",
        num: "A.2.2",
        successcriteria: [
          {
            id: "editing-view-status-indicators",
            num: "A.2.2.1",
            handle: "Editing-View Status Indicators",
            text:
              "If an editing-view adds status indicators to the content being edited, then the information being conveyed by the status indicators can be programmatically determined.",
            level: "A",
          },
          {
            id: "access-rendered-text-props",
            num: "A.2.2.2",
            handle: "Access to Rendered Text Properties",
            text:
              "If an editing-view renders any text formatting properties that authors can also edit using the editing-view, then the properties can be programmatically determined.",
            level: "AA",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "UI operable",
      text: "Editing-views are operable",
      num: "A.3",
    },
    guidelines: [
      {
        id: "works-with-keyboard",
        num: "A.3.1",
        handle: "Provide keyboard access to authoring features.",
        text:
          "Some authors with limited mobility or visual disabilities do not use a mouse and instead require keyboard interface access to all of the functionality of the authoring tool.",
        successcriteria: [
          {
            id: "keyboard-access-minimum",
            num: "A.3.1.1",
            handle: "Keyboard Access (Minimum)",
            text:
              "All functionality of the authoring tool is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
            level: "A",
          },
          {
            id: "no-keyboard-traps",
            num: "A.3.1.2",
            handle: "No Keyboard Traps",
            text:
              "If keyboard focus can be moved to a component using a keyboard interface, then focus can be moved away from that component using only a keyboard interface. If it requires more than unmodified arrow or tab keys or other standard exit methods, authors are advised of the method for moving focus away.",
            level: "A",
          },
          {
            id: "efficient-keyboard-access",
            num: "A.3.1.3",
            handle: "Efficient Keyboard Access",
            text:
              "The authoring tool user interface includes mechanisms to make keyboard access more efficient than sequential keyboard access.",
            level: "AA",
          },
        ],
      },
      {
        id: "enough-time",
        num: "A.3.2",
        handle: "Provide authors with enough time.",
        text:
          "Some authors who have difficulty typing, operating the mouse, or processing information can be prevented from using systems with short time limits or that require fast reaction speeds, such as clicking on a moving target.",
        successcriteria: [
          {
            id: "auto-save-minimum",
            num: "A.3.2.1",
            handle: "Auto-Save (minimum)",
            text:
              "The authoring tool does not include session time limits or the authoring tool can automatically save edits made before the session time limits are reached.",
            level: "A",
          },
          {
            id: "timing-adjustable",
            num: "A.3.2.2",
            handle: "Timing Adjustable",
            text:
              'The authoring tool does not include time limits or at least one of the following is true: (a) Turn Off: Authors are allowed to turn off the time limit before encountering it; or (b) Adjust: Authors are allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or (c) Extend: Authors are warned before time expires and given at least 20 seconds to extend the time limit with a simple action (e.g. "press the space bar"), and authors are allowed to extend the time limit at least ten times; or (d) Real-time Exception: The time limit is a required part of a real-time event (e.g. a collaborative authoring system), and no alternative to the time limit is possible; or (e) Essential Exception: The time limit is essential and extending it would invalidate the activity; or (f) 20 Hour Exception: The time limit is longer than 20 hours.',
            level: "A",
          },
          {
            id: "static-input-components",
            num: "A.3.2.3",
            handle: "Static Input Components",
            text:
              "The authoring tool does not include moving user interface components that accept input where the movement of these components cannot be paused by authors. ",
            level: "A",
          },
        ],
      },
      {
        id: "flashing-optional",
        num: "A.3.3",
        handle: "Help authors avoid flashing that could cause seizures",
        text:
          "Flashing can cause seizures in authors with photosensitive seizure disorder.",
        successcriteria: [
          {
            id: "static-view-option",
            num: "A.3.3.1",
            handle: "Static View Option",
            text:
              "If an editing-view can play visual time-based content, then playing is not necessarily automatic upon loading the content and playing can be paused.",
            level: "A",
          },
        ],
      },
      {
        id: "enhance-navigation-via-structure",
        handle: "Enhance navigation and editing via content structure. ",
        text:
          "Some authors who have difficulty typing or operating the mouse benefit when authoring tools make use of the structure present in web content to simplify navigating and editing the content.",
        num: "A.3.4",
        successcriteria: [
          {
            id: "navigate-by-structure",
            num: "A.3.4.1",
            handle: "Navigate by structure",
            text:
              "If editing-views expose the markup elements in the web content being edited, then the markup elements (e.g. source code, content renderings) are selectable and navigation mechanisms are provided to move the selection focus between elements.",
            level: "AA",
          },
        ],
      },
      {
        id: "content-searchable",
        handle: "Provide text search of the content.",
        text:
          "Some authors who have difficulty typing or operating the mouse benefit from the ability to use text search to navigate to arbitrary points within the web content being edited.",
        num: "A.3.5",
        successcriteria: [
          {
            id: "text-search",
            num: "A.3.5.1",
            handle: "Text Search",
            text:
              "If the authoring tool provides an editing-view of text-based content, then the editing-view enables text search, such that all of the following are true: (a) All Editable Text: Any text content that is editable by the editing-view is searchable (including alternative content); and (b) Match: Matching results can be presented to authors and given focus; and (c) No Match: Authors are informed when no results are found; and (d) Two-way: The search can be made forwards or backwards.",
            level: "AA",
          },
        ],
      },
      {
        id: "supports-display-prefs",
        num: "A.3.6",
        handle: "Manage preference settings",
        text:
          "Some authors need to set their own display settings in a way that differs from the presentation that they want to define for the published web content. Providing the ability to save and reload sets of keyboard and display preference settings benefits authors who have needs that differ over time (e.g. due to fatigue).",
        successcriteria: [
          {
            id: "independence-of-display",
            num: "A.3.6.1",
            handle: "Independence of Display",
            text:
              "If the authoring tool includes display settings for editing-views, then the authoring tool allows authors to adjust these settings without modifying the web content being edited.",
            level: "A",
          },
          {
            id: "save-settings",
            num: "A.3.6.2",
            handle: "Save Settings",
            text:
              "If the authoring tool includes display and/or control settings, then these settings can be saved between authoring sessions.",
            level: "AA",
          },
          {
            id: "apply-platform-settings",
            num: "A.3.6.3",
            handle: "Apply Platform Settings",
            text:
              "The authoring tool respects changes in platform display and control settings, unless authors select more specific display and control settings using the authoring tool.",
            level: "AA",
          },
        ],
      },
      {
        id: "previews-accessible",
        num: "A.3.7",
        handle:
          "Ensure that previews are at least as accessible as in-market user agents.",
        text:
          "Preview features are provided by many authoring tools because the workflow of authors often includes periodically checking how user agents will display the web content to end users. Authors with disabilities need the same opportunity to check their work.",
        successcriteria: [
          {
            id: "preview-minimum",
            num: "A.3.7.1",
            handle: "Preview (Minimum)",
            text:
              "If a preview is provided, then at least one of the following is true: (a) In-Market User Agent: The preview renders content using a user agent that is in-market; or (b) UAAG (Level A): The preview conforms to the User Agent Accessibility Guidelines 1.0 Level A",
            level: "A",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "UI understandable",
      text: "Editing-views are understandable",
      num: "A.4",
    },
    guidelines: [
      {
        id: "prevent-mistakes",
        num: "A.4.1",
        handle: "Help authors avoid and correct mistakes.",
        text:
          "All authoring actions are either reversible or the authoring tool requires author confirmation to proceed.",
        successcriteria: [
          {
            id: "content-changes-reversible",
            num: "A.4.1.1",
            handle: "Content Changes Reversible (Minimum)",
            text:
              "All authoring actions are either reversible or the authoring tool requires author confirmation to proceed.",
            level: "A",
          },
          {
            id: "settings-change-confirm",
            num: "A.4.1.2",
            handle: "Settings Change Confirmation",
            text:
              "If the authoring tool provides mechanisms for changing authoring tool user interface settings, then those mechanisms can reverse the setting changes, or the authoring tool requires author confirmation to proceed. ",
            level: "A",
          },
        ],
      },
      {
        id: "features-documented",
        handle:
          "Document the user interface, including all accessibility features.",
        text:
          "Some authors may not be able to understand or operate the authoring tool user interface without documentation.",
        num: "A.4.2",
        successcriteria: [
          {
            id: "describe-features",
            num: "A.4.2.1",
            handle: "Describe Accessibility Features",
            text:
              "For each authoring tool feature that is used to meet Part A of ATAG 2.0, at least one of the following is true: (a) Described in the Documentation: Use of the feature is explained in the authoring tool's documentation; or (b) Described in the Interface: Use of the feature is explained in the authoring tool user interface; or (c) Platform Service: The feature is a service provided by an underlying platform; or (d) Not Used by Authors: The feature is not used directly by authors (e.g. passing information to a platform accessibility service).",
            level: "A",
          },
          {
            id: "document-all-features",
            num: "A.4.2.2",
            handle: "Document All Features",
            text:
              "For each authoring tool feature, at least one of the following is true:  (a) Described in the Documentation: Use of the feature is explained in the authoring tool's documentation; or (b) Described in the Interface: Use of the feature is explained in the authoring tool user interface; or (c) Platform Service: The feature is a service provided by an underlying platform; or (d) Not Used by Authors: The feature is not used directly by authors (e.g. passing information to a platform accessibility service).",
            level: "AA",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "Generated Content Accessible",
      text: "Fully automatic processes produce accessible content ",
      num: "B.1",
    },
    guidelines: [
      {
        id: "auto-content-accessible",
        num: "B.1.1",
        handle: "Ensure that automatically-specified content is accessible.",
        text:
          "If authoring tools automatically produce web content that includes accessibility problems (WCAG), then this will impose additional repair tasks on authors.",
        successcriteria: [
          {
            id: "content-after-authoring-session",
            num: "B.1.1.1",
            handle: "Content Auto-Generation After Authoring Sessions (WCAG)",
            text:
              "The authoring tool does not automatically generate web content after the end of an authoring session, or, authors can specify that the content be accessible web content (WCAG). (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "content-during-authoring-session",
            num: "B.1.1.2",
            handle: "Content Auto-Generation During Authoring Sessions (WCAG",
            text:
              " If the authoring tool provides the functionality for automatically generating web content during an authoring session, then at least one of the following is true: (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
        ],
      },
      {
        id: "accessibility-information-preserved",
        handle: "Ensure that accessibility information is preserved.",
        text:
          "Accessibility information (WCAG) is critical to maintaining comparable levels of web content accessibility (WCAG) between the input and output of web content transformations.",
        num: "B.1.2",
        successcriteria: [
          {
            id: "restructuring-recording-transformations",
            num: "B.1.2.1",
            handle: "Restructuring and Recoding Transformations",
            text:
              "If the authoring tool provides restructuring transformations or re-coding transformations, and if equivalent mechanisms exist in the web content technology of the output, then at least one of the following is true: (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "copy-paste-in-authoring-tool",
            num: "B.1.2.2",
            handle: "Copy-Paste Inside Authoring Tool (WCAG)",
            text:
              "If the authoring tool supports copy and paste of structured content, then any accessibility information (WCAG) in the copied content is preserved when the authoring tool is both the source and destination of the copy-paste and the source and destination use the same web content technology. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "optimizations-preserve-accessibility",
            num: "B.1.2.3",
            handle: "Optimizations Preserve Accessibility",
            text:
              "If the authoring tool provides optimizing web content transformations, then any accessibility information (WCAG) in the input is preserved in the output.",
            level: "A",
          },
          {
            id: "text-alts-for-non-text-preserved",
            num: "B.1.2.4",
            handle: "Text Alternatives for Non-Text Content are Preserved",
            text:
              " If the authoring tool provides web content transformations that preserve non-text content in the output, then any text alternatives for that non-text content are also preserved, if equivalent mechanisms exist in the web content technology of the output. ",
            level: "A",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "Authors Supported",
      text: "Authors are supported in producing accessible content",
      num: "B.2",
    },
    guidelines: [
      {
        id: "authors-supported-in-producing-content",
        handle: "Ensure that accessible content production is possible. ",
        text:
          "To support accessible web content (WCAG) production, at minimum, it is possible to produce web content that conforms with WCAG 2.0 using the authoring tool.",
        num: "B.2.1",
        successcriteria: [
          {
            id: "accessible-content-possible",
            num: "B.2.1.1",
            handle: "Ensure that accessible content production is possible. ",
            text:
              "The authoring tool does not place restrictions on the web content that authors can specify or those restrictions do not prevent WCAG 2.0 success criteria from being met. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
        ],
      },
      {
        id: "editors-guided",
        handle: "Editors guided",
        text: "Editors are guided to produce accessible content.",
        num: "B.2.2",
        successcriteria: [
          {
            id: "accessible-option-prominence",
            num: "B.2.2.1",
            handle: "Accessible Option Prominence (WCAG)",
            text:
              "If authors are provided with a choice of authoring actions for achieving the same authoring outcome (e.g. styling text), then options that will result in accessible web content (WCAG) are at least as prominent as options that will not. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "setting-accessibility-props",
            num: "B.2.2.2",
            handle: "Setting Accessibility Properties (WCAG)",
            text:
              "If the authoring tool provides mechanisms to set web content properties (e.g. attribute values), then mechanisms are also provided to set web content properties related to accessibility information (WCAG). (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
        ],
      },
      {
        id: "alternatives-manageable",
        handle: "Text alternatives can be managed",
        text:
          "There is a tool for providing text alternatives to “non-text content”, like images, videos and data visualisation.",
        num: "B.2.3",
        successcriteria: [
          {
            id: "alternative-content-editable",
            num: "B.2.3.1",
            handle: "Alternative Content is Editable (WCAG)",
            text:
              "If the authoring tool provides functionality for adding non-text content, then authors are able to modify programmatically associated text alternatives for non-text content. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "automatic-repair-of-text-alts",
            num: "B.2.3.2",
            handle: "Automating Repair of Text Alternatives",
            text:
              'The authoring tool does not attempt to repair text alternatives for non-text content or the following are all true: (a) No Generic or Irrelevant Strings: Generic strings (e.g. "image") and irrelevant strings (e.g. the file handle, file format) are not used as text alternatives; and (b) In-Session Repairs: If the repair attempt occurs during an authoring session, authors have the opportunity to accept, modify, or reject the repair attempt prior to insertion of the text alternative into the content; and (c) Out-of-Session Repairs: If the repair attempt occurs after an authoring session has ended, the repaired text alternatives are indicated during subsequent authoring sessions (if any) and authors have the opportunity to accept, modify, or reject the repair strings prior to insertion in the content.',
            level: "A",
          },
        ],
      },
      {
        id: "accessible-templates-available",
        handle: "Assist authors with accessible templates.",
        text:
          " There are accessible templates available. If there is a repository of templates, it is easy to find the ones that prioritise accessibility.",
        num: "B.2.4",
        successcriteria: [
          {
            id: "accessible-template-options",
            num: "B.2.4.1",
            handle: "Accessible Template Options (WCAG)",
            text:
              "If the authoring tool provides templates, then there are accessible template (WCAG) options for a range of template uses. (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "identify-template-accessibility",
            num: "B.2.4.2",
            handle: "Identify Template Accessibility",
            text:
              "If the authoring tool includes a template selection mechanism and provides any non-accessible template (WCAG) options, then the template selection mechanism can display distinctions between the accessible and non-accessible options.",
            level: "AA",
          },
          {
            id: "author-created-templates",
            num: "B.2.4.3",
            text:
              "If the authoring tool includes a template selection mechanism and allows authors to create new non-accessible templates (WCAG), then authors can enable the template selection mechanism to display distinctions between accessible and non-accessible templates that they create.",
            handle: "Author-Created Templates",
            level: "AA",
          },
        ],
      },
      {
        id: "accessible-components-available",
        handle: "Assist authors with accessible pre-authored content.",
        text:
          " If any components or plugins are built-in to the tool, they are accessible. If there is a gallery of components or plug-ins, it indicates accessible options.",
        num: "B.2.5",
        successcriteria: [
          {
            id: "accessible-pre-authored-content-options",
            num: "B.2.5.1",
            handle: "Accessible Pre-Authored Content Options",
            text:
              "If the authoring tool provides pre-authored content, then a range of accessible pre-authored content (to WCAG Level AA) options are provided.",
            level: "AA",
          },
          {
            id: "identify-pre-authored-content-accessibility",
            num: "B.2.5.2",
            handle: "Identify Pre-Authored Content Accessibility",
            text:
              "If the authoring tool includes a pre-authored content selection mechanism and provides any non-accessible pre-authored content (WCAG Level AA) options, then the selection mechanism can display distinctions between the accessible and non-accessible options.",
            level: "AA",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "Helps Improve Accessibility",
      text: "Helps with improving the accessibility of existing content",
      num: "B.3",
    },
    guidelines: [
      {
        id: "automatically-checks",
        handle: "Checks accessibility automatically",
        text:
          " Has built-in checks for common accessibility problems, for example a check to identify missing alternative text.",
        num: "B.3.1",
        successcriteria: [
          {
            id: "checking-assistance",
            num: "B.3.1.1",
            handle: "Checking Assistance (WCAG)",
            text:
              "If the authoring tool provides authors with the ability to add or modify web content in such a way that a WCAG 2.0 success criterion can be violated, then accessibility checking for that success criterion is provided (e.g. an HTML authoring tool that inserts images should check for alternative text; a video authoring tool with the ability to edit text tracks should check for captions). (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "help-authors-decide",
            num: "B.3.1.2",
            handle: "Help Authors Decide",
            text:
              "If the authoring tool provides accessibility checking that relies on authors to decide whether potential web content accessibility problems (WCAG) are correctly identified (i.e. manual checking and semi-automated checking), then the accessibility checking process provides instructions that describe how to decide.",
            level: "A",
          },
          {
            id: "help-authors-locate",
            num: "B.3.1.3",
            handle: "Help Authors Locate",
            text:
              "If the authoring tool provides checks that require authors to decide whether a potential web content accessibility problem (WCAG) is correctly identified (i.e. manual checking and semi-automated checking), then the relevant content is identified to the authors.",
            level: "A",
          },
          {
            id: "status-report",
            num: "B.3.1.4",
            handle: "Status Report",
            text:
              "If the authoring tool provides checks, then authors can receive an accessibility status report based on the results of the accessibility checks.",
            level: "AA",
          },
          {
            id: "programmatic-association-of-rules",
            num: "B.3.1.5",
            handle: "Programmatic Association of Results",
            text:
              "If the authoring tool provides checks, then the authoring tool can programmatically associate accessibility checking results with the web content that was checked.",
            level: "AA",
          },
        ],
      },
      {
        id: "helps-fix-problems",
        handle: "Helps content editors fix problems",
        text:
          " Provides suggestions to content editor about accessibility problems.",
        num: "B.3.2",
        successcriteria: [
          {
            id: "repair-assistance",
            num: "B.3.2.1",
            handle: "Repair Assistance (WCAG",
            text:
              "If checking (see Success Criterion B.3.1.1) can detect that a WCAG 2.0 success criterion is not met, then repair suggestion(s) are provided: (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "Promotes Accessibility Features",
      text: "Promotes and integrates accessibility features",
      num: "B.4",
    },
    guidelines: [
      {
        id: "features-promote-accessibility",
        handle: "Accessibility features prominent",
        text:
          "Accessibility features are on by default and a prominent part of the editing workflow. Documentation shows examples of how to create accessible content, for instance with example markup or screenshots.",
        num: "B.4.1",
        successcriteria: [
          {
            id: "features-active-by-default",
            num: "B.4.1.1",
            handle: "Features Active by Default",
            text:
              "All accessible content support features are turned on by default. ",
            level: "A",
          },
          {
            id: "option-to-reactivate-features",
            num: "B.4.1.2",
            handle: "Option to Reactivate Features",
            text:
              "The authoring tool does not include the option to turn off its accessible content support features or features which have been turned off can be turned back on.",
            level: "A",
          },
          {
            id: "feature-deactivation-warning",
            num: "B.4.1.3",
            handle: "Feature Deactivation Warning",
            text:
              "The authoring tool does not include the option to turn off its accessible content support features or, if these features can be turned off, authors are informed that this may increase the risk of content accessibility problems (WCAG).",
            level: "AA",
          },
          {
            id: "feature-prominence",
            num: "B.4.1.4",
            handle: "Feature Prominence",
            text:
              "All accessible content support features are at least as prominent as features related to either invalid markup, syntax errors, spelling errors or grammar errors.",
            level: "AA",
          },
        ],
      },
      {
        id: "documentation-promotes-accessibility",
        handle: "Documentation promotes accessibility",
        text:
          " Provides suggestions to content editor about accessibility problems.",
        num: "B.4.2",
        successcriteria: [
          {
            id: "model-practice",
            num: "B.4.2.1",
            handle: "Model Practice (WCAG)",
            text:
              "A range of examples in the documentation (e.g. markup, screen shots of WYSIWYG editing-views) demonstrate accessible authoring practices (WCAG). (Level A to meet WCAG 2.0 Level A success criteria; Level AA to meet WCAG 2.0 Level A and AA success criteria; Level AAA to meet all WCAG 2.0 success criteria)",
            level: "A-AAA",
          },
          {
            id: "feature-instructions",
            num: "B.4.2.2",
            handle: "Feature Instructions",
            text:
              "Instructions for using any accessible content support features appear in the documentation.",
            level: "A",
          },
        ],
      },
    ],
  },
];

export default atag;
