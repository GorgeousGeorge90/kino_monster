import supabase from '../../../api/client';


class CommentsServices {
    async fetchComments() {
        let {data: comments, error} = await supabase
            .from('comments')
            .select('*')

        return comments
    }

    async createComment(comment:string,film:string) {
        const {data, error} = await supabase
            .from('comments')
            .upsert({
                    comment:comment,
                    film:film,
                })
            .select()

        return data

    }
}

export default new CommentsServices()