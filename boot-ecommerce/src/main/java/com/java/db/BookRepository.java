package com.java.db;
import org.springframework.data.jpa.repository.JpaRepository;
import com.java.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
