import React from 'react'
import
{
  errors,
  withStore,
} from 'freenit'

import Template from 'templates/default/detail'


class BlogDetail extends React.Component {
  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { blog, notification } = this.props.store
    const { slug } = this.props.match.params
    const result = await blog.fetch(slug)
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    }
  }

  render() {
    return (
      <Template>
        <div style={{ padding: 20 }}>
          <h1 style={{ textAlign: "center", margin: 1 }}>
            Thursday Night
          </h1>
          <h4 style={{ textAlign: "center", color: "gray", margin: 1 }}>
            wrote on 12.11.2020 by meka
          </h4>
          <img alt="something" style={{ height: 200, float: "left", marginRight: 10 }} src="http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg" />
          <p style={{ textIndent: 20 }}>
              Vel sit sunt veniam ex ipsa. Corporis voluptate porro sapiente asperiores natus quod nulla. Ipsam dolore voluptas optio. Corporis assumenda ullam officia ut.  Et quia esse est ut. Et sunt quaerat saepe sit distinctio adipisci. Hic est quod vel ea ea enim accusamus itaque.  Vero et quisquam eum ut dolorem laboriosam consequatur veniam. Libero veritatis rem consectetur aut rem aliquid nihil. Aut officiis nihil ipsa sed nobis et. Mollitia voluptas commodi velit totam rem.  Explicabo minima commodi occaecati non. Doloremque non distinctio animi repellendus provident. Rem aliquam dolores et.  Nesciunt quia enim ipsum aut. Architecto sequi corporis ipsa dolorem explicabo et ut. Tenetur autem minus adipisci hic numquam.    Praesentium natus sunt velit. Assumenda optio voluptas consequatur eos. Nesciunt cumque quasi enim dolorem ducimus quae. Vitae qui repellendus soluta quis qui ut blanditiis id. Officiis quasi nihil necessitatibus explicabo quis. Esse odio autem recusandae non saepe suscipit accusamus.  Voluptas et ut autem fugiat vitae earum dolores ea. Fuga natus numquam doloremque voluptatem voluptas eos. Doloribus alias accusamus nisi quibusdam sint.  Magnam magni consequatur molestiae reprehenderit. Harum nesciunt suscipit iste ut consequatur. Vel nihil atque quia commodi veritatis nemo doloribus placeat. Nemo laudantium repellat quidem. Harum ab ullam aut eaque eligendi officiis.  Temporibus libero quam tempore cum. Esse et libero non nesciunt dolorem doloremque rerum et. Modi voluptatem neque aliquam omnis et voluptatem doloribus reprehenderit. Esse ut sed amet voluptatibus ut sed. Est officiis ipsam corrupti sed.  Quaerat earum nihil sit dolore nostrum quisquam. Illum facere fugiat aut quo et. Ducimus tempora ut commodi unde. Natus voluptatem aut animi nisi modi.   Vel sit sunt veniam ex ipsa. Corporis voluptate porro sapiente asperiores natus quod nulla. Ipsam dolore voluptas optio. Corporis assumenda ullam officia ut.  Et quia esse est ut. Et sunt quaerat saepe sit distinctio adipisci. Hic est quod vel ea ea enim accusamus itaque.  Vero et quisquam eum ut dolorem laboriosam consequatur veniam. Libero veritatis rem consectetur aut rem aliquid nihil. Aut officiis nihil ipsa sed nobis et. Mollitia voluptas commodi velit totam rem.  Explicabo minima commodi occaecati non. Doloremque non distinctio animi repellendus provident. Rem aliquam dolores et.  Nesciunt quia enim ipsum aut. Architecto sequi corporis ipsa dolorem explicabo et ut. Tenetur autem minus adipisci hic numquam.    Praesentium natus sunt velit. Assumenda optio voluptas consequatur eos. Nesciunt cumque quasi enim dolorem ducimus quae. Vitae qui repellendus soluta quis qui ut blanditiis id. Officiis quasi nihil necessitatibus explicabo quis. Esse odio autem recusandae non saepe suscipit accusamus.  Voluptas et ut autem fugiat vitae earum dolores ea. Fuga natus numquam doloremque voluptatem voluptas eos. Doloribus alias accusamus nisi quibusdam sint.  Magnam magni consequatur molestiae reprehenderit. Harum nesciunt suscipit iste ut consequatur. Vel nihil atque quia commodi veritatis nemo doloribus placeat. Nemo laudantium repellat quidem. Harum ab ullam aut eaque eligendi officiis.  Temporibus libero quam tempore cum. Esse et libero non nesciunt dolorem doloremque rerum et. Modi voluptatem neque aliquam omnis et voluptatem doloribus reprehenderit. Esse ut sed amet voluptatibus ut sed. Est officiis ipsam corrupti sed.  Quaerat earum nihil sit dolore nostrum quisquam. Illum facere fugiat aut quo et. Ducimus tempora ut commodi unde. Natus voluptatem aut animi nisi modi.
          </p>
          <p style={{ textIndent: 20 }}>
              Vel sit sunt veniam ex ipsa. Corporis voluptate porro sapiente asperiores natus quod nulla. Ipsam dolore voluptas optio. Corporis assumenda ullam officia ut.  Et quia esse est ut. Et sunt quaerat saepe sit distinctio adipisci. Hic est quod vel ea ea enim accusamus itaque.  Vero et quisquam eum ut dolorem laboriosam consequatur veniam. Libero veritatis rem consectetur aut rem aliquid nihil. Aut officiis nihil ipsa sed nobis et. Mollitia voluptas commodi velit totam rem.  Explicabo minima commodi occaecati non. Doloremque non distinctio animi repellendus provident. Rem aliquam dolores et.  Nesciunt quia enim ipsum aut. Architecto sequi corporis ipsa dolorem explicabo et ut. Tenetur autem minus adipisci hic numquam.    Praesentium natus sunt velit. Assumenda optio voluptas consequatur eos. Nesciunt cumque quasi enim dolorem ducimus quae. Vitae qui repellendus soluta quis qui ut blanditiis id. Officiis quasi nihil necessitatibus explicabo quis. Esse odio autem recusandae non saepe suscipit accusamus.  Voluptas et ut autem fugiat vitae earum dolores ea. Fuga natus numquam doloremque voluptatem voluptas eos. Doloribus alias accusamus nisi quibusdam sint.  Magnam magni consequatur molestiae reprehenderit. Harum nesciunt suscipit iste ut consequatur. Vel nihil atque quia commodi veritatis nemo doloribus placeat. Nemo laudantium repellat quidem. Harum ab ullam aut eaque eligendi officiis.  Temporibus libero quam tempore cum. Esse et libero non nesciunt dolorem doloremque rerum et. Modi voluptatem neque aliquam omnis et voluptatem doloribus reprehenderit. Esse ut sed amet voluptatibus ut sed. Est officiis ipsam corrupti sed.  Quaerat earum nihil sit dolore nostrum quisquam. Illum facere fugiat aut quo et. Ducimus tempora ut commodi unde. Natus voluptatem aut animi nisi modi.   Vel sit sunt veniam ex ipsa. Corporis voluptate porro sapiente asperiores natus quod nulla. Ipsam dolore voluptas optio. Corporis assumenda ullam officia ut.  Et quia esse est ut. Et sunt quaerat saepe sit distinctio adipisci. Hic est quod vel ea ea enim accusamus itaque.  Vero et quisquam eum ut dolorem laboriosam consequatur veniam. Libero veritatis rem consectetur aut rem aliquid nihil. Aut officiis nihil ipsa sed nobis et. Mollitia voluptas commodi velit totam rem.  Explicabo minima commodi occaecati non. Doloremque non distinctio animi repellendus provident. Rem aliquam dolores et.  Nesciunt quia enim ipsum aut. Architecto sequi corporis ipsa dolorem explicabo et ut. Tenetur autem minus adipisci hic numquam.    Praesentium natus sunt velit. Assumenda optio voluptas consequatur eos. Nesciunt cumque quasi enim dolorem ducimus quae. Vitae qui repellendus soluta quis qui ut blanditiis id. Officiis quasi nihil necessitatibus explicabo quis. Esse odio autem recusandae non saepe suscipit accusamus.  Voluptas et ut autem fugiat vitae earum dolores ea. Fuga natus numquam doloremque voluptatem voluptas eos. Doloribus alias accusamus nisi quibusdam sint.  Magnam magni consequatur molestiae reprehenderit. Harum nesciunt suscipit iste ut consequatur. Vel nihil atque quia commodi veritatis nemo doloribus placeat. Nemo laudantium repellat quidem. Harum ab ullam aut eaque eligendi officiis.  Temporibus libero quam tempore cum. Esse et libero non nesciunt dolorem doloremque rerum et. Modi voluptatem neque aliquam omnis et voluptatem doloribus reprehenderit. Esse ut sed amet voluptatibus ut sed. Est officiis ipsam corrupti sed.  Quaerat earum nihil sit dolore nostrum quisquam. Illum facere fugiat aut quo et. Ducimus tempora ut commodi unde. Natus voluptatem aut animi nisi modi.
          </p>
        </div>
      </Template>
    )
  }
}


export default withStore(BlogDetail)
