import { Button } from "@kaizen/component-library/components/Button"
import { TitleBlock } from "@kaizen/component-library/draft"
import * as React from "react"

require("./TitleBlock.stories.scss")

const stickyContainerStyle = {
  width: "100%",
  height: "2000px",
  background: "lightgrey",
}

export default {
  title: "TitleBlock (React)",
}

export const WithTitle = () => <TitleBlock title="Reports" />

WithTitle.story = {
  name: "with Title",
}

export const WithBreadcrumb = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
  />
)

WithBreadcrumb.story = {
  name: "with breadcrumb",
}

export const WithToolbar = () => (
  <TitleBlock
    title="Home"
    toolbar={[<Button label="Action" />, <Button label="Action 2" primary />]}
  />
)

WithToolbar.story = {
  name: "with toolbar",
}

export const WithTag = () => (
  <TitleBlock title="Home" surveyStatus={{ status: "live", text: "Live" }} />
)

WithTag.story = {
  name: "with tag",
}

export const Sticky = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      sticky
      toolbar={[<Button label="Action" />, <Button label="Action 2" primary />]}
    />
  </div>
)

Sticky.story = {
  name: "sticky",
}

export const ReportingVariant = () => (
  <TitleBlock
    title="Q4 Evaluation, 2019"
    variant="reporting"
    breadcrumb={{ path: "#", text: "Back to reports" }}
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
    surveyStatus={{ status: "live", text: "Live" }}
  />
)

ReportingVariant.story = {
  name: "reporting variant",
}

export const EducationVariant = () => (
  <TitleBlock
    title="How to tie up your shoelaces"
    variant="education"
    breadcrumb={{ path: "#", text: "Back to tutorials" }}
    toolbar={[<Button label="Action" />, <Button label="Action 2" primary />]}
  />
)

EducationVariant.story = {
  name: "education variant",
}
