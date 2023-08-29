import { graphQLRequest } from "./request";

export const notesLoader = async ({ params: { folderId } }) => {
    console.log('Params', { folderId });
    const query = `query Folder($folderId: String!) {
        folder(folderId: $folderId) {
          id
          name
          notes {
              id
              content
              updatedAt
          }
        }
      }`;

    const data = await graphQLRequest({
        query,
        variables: {
            folderId
        }
    })
    console.log('From Router', {data});
    return data;
}

export const noteLoader = async ({ params: { noteId } }) => {
    console.log('Params', { noteId });
    const query = `query Note($noteId: String!) {
        note(noteId: $noteId) {
         id
         content
        }
      }`;

      const data = await graphQLRequest({
        query,
        variables: {
            noteId
        }
    })
    console.log('From Router', {data});
    return data;
}

export const addNewNote = async ({ params, request }) => {
    const newNote = await request.formData();
    const formDataObj = {};
    newNote.forEach((value, key) => { formDataObj[key] = value; });

    const query = `mutation Mutation($content: String!, $folderId: ID!) {
        addNote(content: $content, folderId: $folderId) {
            id 
            content
        }
    }`;

    const { addNote } = await graphQLRequest({
        query,
        variables: formDataObj
    })
    console.log('Add Note', {addNote});
    return addNote;
};

export const updateNote = async ({ params, request }) => {
    const updatedNote = await request.formData();
    const formDataObj = {};
    updatedNote.forEach((value, key) => { formDataObj[key] = value; });

    const query = `mutation Mutation($id: String!, $content: String!) {
        updateNote(id: $id, content: $content) {
            id 
            content
        }
    }`;

    const { updateNote } = await graphQLRequest({
        query,
        variables: formDataObj
    })
    console.log('Add Note', {updateNote});
    return updateNote;
};