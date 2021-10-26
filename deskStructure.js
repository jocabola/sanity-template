import S from "@sanity/desk-tool/structure-builder";

import {
  MdSettings,
  MdHome,
  MdPhotoLibrary
} from "react-icons/md";


export default () =>
  S.list()
    .title("Pages")
    .items([  
      S.listItem()
      .title("Home Page")
      .icon(MdHome)
      .child(
        S.document()
          .schemaType("home")
          .documentId("home")
          .title("Content")
      ),
      S.listItem()
        .title("Projects")
        .icon(MdPhotoLibrary)
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")
      ),
      S.listItem()
      .title("General Settings")
      .icon(MdSettings)
      .child(
        S.document()
          .schemaType("generalSettings")
          .documentId("generalSettings")
          .title("Content")
      ),
      S.divider()
    ]);